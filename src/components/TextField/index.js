import React from 'react'
import { Label, Input } from './styles'

const TextField = ({
  content,
  name,
  three = false,
  onChange,
  four = false
}) => (
  <Label three={three} four={four}>
    {content}
    <Input name={name} type="text" onChange={onChange} />
  </Label>
)

export default TextField
