import React from 'react'
import { Label } from '../../objects/Label'
import { Option } from '../../objects/Option'
import { Select } from '../../objects/Select'

const SelectField = ({ content, options, name, onChange }) => (
  <Label>
    {content}
    <Select name={name} onChange={onChange}>
      {options.map(({ content }, key) => (
        <Option key={content + key} value={content}>
          {content}
        </Option>
      ))}
    </Select>
  </Label>
)

export default SelectField
