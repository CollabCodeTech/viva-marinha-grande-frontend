import React from 'react'
import { Main } from './styles'
import DetailsService from '../../containers/DetailsService'
import MainHeader from '../../containers/MainHeader'

const Details = ({ match: { params } }) => {
  return (
  <Main>
    <MainHeader />
    <DetailsService id={params.id} />
  </Main>
)
}

export default Details
