import styled from 'styled-components'
import { Button } from '../../components/MainButton/styles'

export const Label = styled.label`
  display: block;
  font-size: var(--size-med);
  margin-bottom: var(--gap-half-min);
`

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  border-radius: 0;
  width: 100%;
  border: 1px solid var(--color-tamarind);
  padding: var(--gap-min);
  font-size: var(--size-med);
  margin-bottom: var(--gap-max);
`

export const Legend = styled.legend`
  display: block;
  font-size: var(--size-max);
  margin-top: var(--gap-med);
  margin-bottom: var(--gap-min);
`

export const Fieldset = styled.fieldset`
  display: block;
`

export const Form = styled.form`
  width: 45%;

  & ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 45px;
    margin-top: var(--gap-double-max);
  }
`
