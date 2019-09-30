import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigation, Title, Actions } from './styles'
import MainList from '../../components/MainList'
import ClearButton from '../../components/ClearButton'
import IconClose from '../../components/IconClose'

const MainMenu = ({ active, closeMenu, openMenu, updateBusiness }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const featchData = async () => {
      const res = await axios.get('http://localhost:5000/category')

      setCategories(() => res.data)
    }

    featchData()
  }, [])

  useEffect(() => {
    const getServicesByActiveCategories = async () => {
      const activeCategories = categories
        .filter(category => category.active)
        .map(category => category.content)

      const { data } = await axios.get(
        `http://localhost:5000/business/categories`,
        {
          params: {
            categories: activeCategories
          }
        }
      )

      updateBusiness(data)
    }

    getServicesByActiveCategories()
  }, [categories, updateBusiness])

  const toggleActive = content => {
    setCategories(old =>
      old.map(category =>
        category.content === content
          ? { ...category, active: !category.active }
          : category
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
