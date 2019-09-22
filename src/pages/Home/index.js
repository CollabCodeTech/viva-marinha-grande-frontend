import React, { useState } from 'react'
import MainHeader from '../../containers/MainHeader'
import MainMenu from '../../containers/MainMenu'
import { Main } from './styles'
import ShowServices from '../../containers/ShowServices'

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const openMenu = event => {
    event.stopPropagation()
    setActiveMenu(true)
  }

  const closeMenu = event => {
    event.stopPropagation()
    setActiveMenu(false)
  }

  return (
    <Main onClick={closeMenu} activeMenu={activeMenu}>
      <MainHeader onClick={openMenu} />
      <MainMenu />
      <ShowServices />
    </Main>
  )
}

export default Home
