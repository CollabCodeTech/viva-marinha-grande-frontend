import React from 'react'

import { Label } from '../../objects/Label'
import { Textarea } from '../../objects/Textarea'

const TextareaField = ({ name, content, onChange }) => (
  <Label>
    {content}
    <Textarea name={name} onChange={onChange} />
  </Label>
)

export default TextareaField
