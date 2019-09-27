import React from 'react'
import { List, Item, Amount } from './styles'

const MainList = ({ items, onClick }) => (
  <List>
    {items.map(({ _id, content, amount, active }) => (
      <Item key={_id} active={active} onClick={() => onClick(content)}>
        {content} <Amount>{amount}</Amount>
      </Item>
    ))}
  </List>
)

export default MainList
