import styled from 'styled-components'

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
`
