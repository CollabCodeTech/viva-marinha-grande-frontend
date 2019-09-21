import React from 'react'
import { Main } from './styles'
import DetailsService from '../../containers/DetailsService'
import MainHeader from '../../containers/MainHeader'

const Details = ({ match: { params } }) => (
  <Main>
    <MainHeader />
    <DetailsService />
  </Main>
)

export default Details
