import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigation, Title, Actions } from './styles'
import MainList from '../../components/MainList'
import ClearButton from '../../components/ClearButton'
import IconClose from '../../components/IconClose'

const MainMenu = ({ active, closeMenu, openMenu }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const featchData = async () => {
      const res = await axios.get('http://192.168.1.71:5000/category')

      setCategories(() => res.data)
    }

    featchData()
  }, [])

  const toggleActive = id => {
    setCategories(old =>
      old.map(service =>
        service._id === id ? { ...service, active: !service.active } : service
      )
    )
  }

  const clearAllActive = () =>
    setCategories(old => old.map(category => ({ ...category, active: false })))

  return (
    <Navigation onClick={openMenu} active={active}>
      <Title>Guia de Serviços</Title>
      <IconClose onClick={closeMenu} />

      <MainList items={categories} onClick={toggleActive} />

      <Actions>
        <ClearButton onClick={clearAllActive}>Limpar</ClearButton>
      </Actions>
    </Navigation>
  )
}

export default MainMenu
