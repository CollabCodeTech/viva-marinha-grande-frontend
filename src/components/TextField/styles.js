import styled, { css } from 'styled-components'

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

      @media (max-width: 610px) {
        width: 28%;
      }

      @media (max-width: 560px) {
        width: 100%;

        &:last-child {
          margin-bottom: var(--gap-max);
        }
      }
    `}
  
  ${({ four }) =>
    four &&
    css`
      width: 18%;

      @media (max-width: 610px) {
        width: 21%;
      }

      @media (max-width: 560px) {
        width: 48%;
      }
    `}
`
