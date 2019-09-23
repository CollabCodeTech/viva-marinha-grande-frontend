import React from 'react'
import { Form, Input, Button } from './styles'
import MainButton from '../MainButton'

const MainSearch = () => (
  <Form>
    <Input />
    <Button>Buscar</Button>
    <MainButton to="/service/new">Insira o seu negócio</MainButton>
  </Form>
)

export default MainSearch
