import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigation, Title, Actions } from './styles'
import MainList from '../../components/MainList'
import ClearButton from '../../components/ClearButton'

const MainMenu = ({ active }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const featchData = async () => {
      const res = await axios.get('http://localhost:5000/category')

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
    <Navigation active={active}>
      <Title>Guia de Serviços</Title>

      <MainList items={categories} onClick={toggleActive} />

      <Actions>
        <ClearButton onClick={clearAllActive}>Limpar</ClearButton>
      </Actions>
    </Navigation>
  )
}

export default MainMenu