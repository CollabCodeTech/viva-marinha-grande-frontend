import React from 'react'
import { Label } from '../../objects/Label'
import { Input } from '../../objects/Input'

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
