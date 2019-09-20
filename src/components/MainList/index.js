import React from 'react'
import { List, Item, Amount } from './styles'

const MainList = ({items, onClick}) => (
  <List >
    {items.map(({_id, name, amount, active}) => (
      <Item key={_id} active={active} onClick={() => onClick(_id)}>
        {name} <Amount>{amount}</Amount>
      </Item>
    ))}
  </List>
)

export default MainList