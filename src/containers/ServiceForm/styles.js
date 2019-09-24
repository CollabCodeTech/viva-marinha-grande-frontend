import styled, { css } from 'styled-components'
import { Button } from '../../components/MainButton/styles'

export const Legend = styled.legend`
  display: block;
  font-size: var(--size-max);
  margin-top: var(--gap-med);
  margin-bottom: var(--gap-min);
`

export const Fieldset = styled.fieldset`
  display: block;

  ${({ day }) =>
    day &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `}
`

export const Form = styled.form`
  width: 60%;

  & ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 45px;
    margin-top: var(--gap-double-max);
  }

  @media (max-width: 1240px) {
    width: 75%;
  }

  @media (max-width: 960px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 540px) {
    & ${Button} {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.4);
    }
  }
`
