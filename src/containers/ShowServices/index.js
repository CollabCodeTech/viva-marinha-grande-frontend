import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'
import CardService from '../../components/CardService'

const ShowServices = ({ business }) => (
  <Wrapper>
    {business.map(business => (
      <Link key={`link${business._id}`} to={`/details/${business._id}`}>
        <CardService business={business} />
      </Link>
    ))}
  </Wrapper>
)

export default ShowServices
