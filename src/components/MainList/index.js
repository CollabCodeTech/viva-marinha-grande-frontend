import React from 'react'
import { List, Item, Amount } from './styles'

const MainList = ({items, onClick}) => (
  <List >
    {items.map(({id, name, amount, active}) => (
      <Item key={id} active={active} onClick={() => onClick(id)}>
        {name} <Amount>{amount}</Amount>
      </Item>
    ))}
  </List>
);

export default MainList