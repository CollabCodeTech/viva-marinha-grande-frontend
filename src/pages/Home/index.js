import React, { useState } from 'react'
import MainHeader from '../../containers/MainHeader'
import MainMenu from '../../containers/MainMenu'
import { Main } from './styles'
import ShowServices from '../../containers/ShowServices'

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const toggleActiveMenu = () => {
    setActiveMenu(old => !old)
  }

  return (
    <Main activeMenu={activeMenu}>
      <MainHeader onClick={toggleActiveMenu} />
      <MainMenu />
      <ShowServices />
    </Main>
  )
}

export default Home
