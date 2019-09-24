import React from 'react'
import { Button } from './styles'

const MainButton = ({ children, to = '', onClick = () => {} }) => (
  <Button
    to={to}
    onClick={event => (to === '' && event.preventDefault()) || onClick(event)}
  >
    {children}
  </Button>
)

export default MainButton
