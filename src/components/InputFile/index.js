import React from 'react'
import { Label } from '../../objects/Label'
import { Input } from '../../objects/Input'

const InputFile = ({ content, name, onChange }) => (
  <Label>
    {content}
    <Input name={name} type="file" onChange={onChange} />
  </Label>
)

export default InputFile
