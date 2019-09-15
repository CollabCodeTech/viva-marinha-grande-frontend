import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link).attrs(props => ({ to: props.to }))`
  display: inline-block;
  background-color: var(--color-strawberry);
  color: var(--color-coconut);
  font-size: var(--size-med);
  font-weight: bold;
  text-decoration: none;
`
