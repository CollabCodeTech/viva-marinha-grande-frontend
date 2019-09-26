import React from 'react'
import { Label } from '../../objects/Label'
import { Input } from '../../objects/Input'

const TextField = ({
  content,
  name,
  three = false,
  onChange,
  four = false,
  dataNameDay,
  type = 'text'
}) => (
  <Label three={three} four={four}>
    {content}
    <Input
      name={name}
      data-nameday={dataNameDay}
      type={type}
      onChange={onChange}
    />
  </Label>
)

export default TextField
