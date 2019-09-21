import React from 'react'
import { Value } from './styles'

const ServiceValue = ({ value }) => (
  <Value>{[...Array(value)].map(() => '€')}</Value>
)

export default ServiceValue
