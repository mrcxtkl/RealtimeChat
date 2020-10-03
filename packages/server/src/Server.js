import { createServer } from 'http'
import express from 'express'
import socket from 'socket.io'
import cors from 'cors'

const app = express()
const server = createServer(app)
const io = socket(server)
const messages = []

app.use(cors())
app.get('/messages', (req, res) => {
  res.json(messages)
})

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`)

  socket.on('message', message => {
    messages.push(message)
    console.log(message)
  })
})

server.listen(3333)
