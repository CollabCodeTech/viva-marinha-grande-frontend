import React from 'react'
import { Label, Input } from './styles'

const TextField = ({ content, name, three = false, onChange }) => (
  <Label three={three}>
    {content}
    <Input name={name} type="text" onChange={onChange} />
  </Label>
)

export default TextField
