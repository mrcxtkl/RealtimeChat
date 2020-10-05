import styled from 'styled-components'

export const Title = styled.span`
  font-size: 24px;
`

export const Container = styled.div`
  color: ${p => p.theme.colors.title};
  background-color: ${p => p.theme.colors.primary};
  width: 100vw;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ThemeSelector = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`
