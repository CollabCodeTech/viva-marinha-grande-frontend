import React from 'react'
import { Header } from './styles'
import MainLogo from '../../components/MainLogo'
import MainSearch from '../../components/MainSearch'
import IconFilter from '../../components/IconFilter'

const MainHeader = ({ onClick }) => (
  <Header>
    <MainLogo />
    <MainSearch />

    <IconFilter onClick={onClick} />
  </Header>
)

export default MainHeader
