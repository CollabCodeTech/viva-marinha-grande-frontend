import React from 'react'
import { Button } from './styles'

const ClearButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
)

export default ClearButton
