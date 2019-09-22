import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './styles'
import MainLogo from '../../components/MainLogo'
import MainSearch from '../../components/MainSearch'
import IconFilter from '../../components/IconFilter'

const MainHeader = ({ onClick }) => (
  <Header>
    <Link to="/">
      <MainLogo />
    </Link>
    <MainSearch />

    <IconFilter onClick={onClick} />
  </Header>
)

export default MainHeader
