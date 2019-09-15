import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Wrapper } from './styles'
import CardStore from '../../components/CardStore'

const ShowStores = () => {
  const [stores, setStores] = useState([])

  const getStores = async () => {
    const { data } = await axios.get('http://localhost:5000/service/resume')
    setStores(data)
  }

  useEffect(() => {
    getStores()
  }, [])

  return (
    <Wrapper>
      {stores.map(store => (
        <CardStore key={store._id} store={store} />
      ))}
    </Wrapper>
  )
}

export default ShowStores
