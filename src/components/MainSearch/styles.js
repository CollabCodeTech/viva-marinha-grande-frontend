import styled from 'styled-components'
import search from '../../img/search.png'

export const Form = styled.form``

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Buscar negócio'
})`
  height: 45px;
  width: 400px;
  padding: 0 var(--gap-med);
  background-color: var(--color-coconut);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  border: none;
  font-size: var(--size-med);
  color: var(--color-sasame);
`

export const Button = styled.button.attrs({ type: 'submit' })`
  text-indent: -9999px;
  background-repeat: no-repeat;
  background-color: var(--color-kiwi);
  background-image: url(${search});
  background-size: 66.666%;
  background-position: center;
  border: none;
  cursor: pointer;
  transition: opacity 100ms linear;

  &:hover {
    opacity: 0.8;
  }
`
