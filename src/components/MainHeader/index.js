import React from 'react'
import { Header, Logo, Title, Search } from './styles'
import MainButton from '../MainButton'

const MainHeader = () => (
  <Header>
    <Logo />
    <Title>Viva Marinha Grande</Title>

    <Search />
    <MainButton>Insira o seu negócio</MainButton>
  </Header>
)

export default MainHeader
