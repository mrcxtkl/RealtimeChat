import React from 'react'
import Switch from 'react-switch'

import { useTheme } from '../../contexts/Theme'

import { Title, Container, ThemeSelector } from './styles'

const Header = () => {
  const { default: { colors, title }, toggleTheme } = useTheme()

  return (
    <Container>
      <Title>Realtime Chat</Title>
      <ThemeSelector>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        height={10}
        width={30}
        handleDiameter={15}
        onColor={colors.toggle}
        offColor={colors.toggle}
      />
      <span>{title[0].toUpperCase() + title.slice(1)} Mode</span>
      </ThemeSelector>
    </Container>
  )
}

export default Header
