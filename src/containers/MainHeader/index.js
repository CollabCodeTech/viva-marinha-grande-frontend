import React from 'react'
import { Header } from './styles'
import MainLogo from '../../components/MainLogo'
import MainSearch from '../../components/MainSearch'

const MainHeader = () => (
  <Header>
    <MainLogo />

    <MainSearch />
  </Header>
)

export default MainHeader
