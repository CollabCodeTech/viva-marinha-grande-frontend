import styled, { css } from 'styled-components'
import { Button } from '../../components/MainButton/styles'

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  border-radius: 0;
  width: 100%;
  border: 1px solid var(--color-tamarind);
  padding: var(--gap-min);
  font-size: var(--size-med);
  margin-bottom: var(--gap-max);
  margin-top: var(--gap-half-min);
`

export const Label = styled.label`
  display: block;
  font-size: var(--size-med);
  transition: all 100ms linear;

  &:focus-within {
    color: var(--color-blueberry);

    & > ${Input} {
      border: 2px solid var(--color-blueberry);
    }
  }

  ${({ full }) =>
    full &&
    css`
      width: 100%;
      text-transform: uppercase;
      color: var(--color-strawberry);
      font-weight: bold;
      letter-spacing: 1.5px;
      margin-bottom: var(--gap-half-min);
    `}

  ${({ three }) =>
    three &&
    css`
      width: 31%;

      @media (max-width: 560px) {
        width: 100%;

        &:last-child {
          margin-bottom: var(--gap-max);
        }
      }
    `}
`

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
    width: 98%;
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
