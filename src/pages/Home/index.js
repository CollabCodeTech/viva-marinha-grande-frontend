import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainHeader from '../../containers/MainHeader'
import MainMenu from '../../containers/MainMenu'
import { Main } from './styles'
import ShowServices from '../../containers/ShowServices'

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [business, setBusiness] = useState([])

  const getBusiness = async () => {
    const { data } = await axios.get(
      'http://192.168.1.71:5000/business/overview'
    )
    setBusiness(data)
  }

  const openMenu = event => {
    event.stopPropagation()
    setActiveMenu(true)
  }

  const closeMenu = event => {
    event.stopPropagation()
    setActiveMenu(false)
  }

  const updateBusiness = business => {
    business.length === 0 ? getBusiness() : setBusiness(business)
  }

  useEffect(() => {
    getBusiness()
  }, [])

  return (
    <Main onClick={closeMenu} activeMenu={activeMenu}>
      <MainHeader onClick={openMenu} />
      <MainMenu
        openMenu={openMenu}
        closeMenu={closeMenu}
        updateBusiness={updateBusiness}
      />
      <ShowServices business={business} />
    </Main>
  )
}

export default Home
