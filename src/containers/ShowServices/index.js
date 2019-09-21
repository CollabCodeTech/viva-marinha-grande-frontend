import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Wrapper } from './styles'
import CardService from '../../components/CardService'

const ShowServices = () => {
  const [stores, setStores] = useState([])

  const getStores = async () => {
    const { data } = await axios.get('http://localhost:5000/service/overview')
    setStores(data)
  }

  useEffect(() => {
    getStores()
  }, [])

  return (
    <Wrapper>
      {stores.map(store => (
        <Link key={`link${store._id}`} to={`/details/${store._id}`}>
          <CardService key={store._id} store={store} />
        </Link>
      ))}
    </Wrapper>
  )
}

export default ShowServices
