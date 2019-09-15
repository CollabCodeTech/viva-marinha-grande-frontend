import styled from 'styled-components'
import MainLogo from '../../img/logo.png'

export const Header = styled.header``

export const Logo = styled.img.attrs({ src: MainLogo })``

export const Title = styled.h1`
  font-size: var(--size-max);
  font-weight: bold;
  color: var(--color-strawberry);
`

export const Search = styled.input.attrs({
  type: 'search',
  placeholder: 'Buscar comércio'
})`
  height: 45px;
  width: 400px;
  padding: 0 var(--gap-med);
  background-color: var(--color-coconut);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  border: none;
`
