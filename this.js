// ignore this file
// node this.js

const a = require('crypto')
const { exec: e } = require('child_process')

e('ls', (_, out) => console.log(out))
const k = [...Array(5).keys()]
k.map(console.log)
a.randomBytes(16, (_, h) => console.log(h.toString('hex')))

void function test(...x) {
  console.table(x)
}(k)
