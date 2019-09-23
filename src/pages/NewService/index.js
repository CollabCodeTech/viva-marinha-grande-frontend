import React from 'react'
import MainHeader from '../../containers/MainHeader'
import ServiceForm from '../../containers/ServiceForm'
import { Main } from './styles'

const NewService = () => (
  <Main>
    <MainHeader />
    <ServiceForm />
  </Main>
)

export default NewService
