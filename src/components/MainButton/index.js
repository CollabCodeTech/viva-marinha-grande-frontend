import React from 'react'
import { Button } from './styles'

const MainButton = ({ children, to }) => <Button to={to}>{children}</Button>

export default MainButton
