import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './styles'
import MainLogo from '../../components/MainLogo'
import IconFilter from '../../components/IconFilter'
import MainButton from '../../components/MainButton'

const MainHeader = ({ onClick }) => (
  <Header>
    <Link to="/">
      <MainLogo />
    </Link>

    <MainButton to="/service/new">Insira o seu negócio</MainButton>

    <IconFilter onClick={onClick} />
  </Header>
)

export default MainHeader
