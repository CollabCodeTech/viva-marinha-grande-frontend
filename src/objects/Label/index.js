import styled, {css} from 'styled-components'
import { Input } from '../Input'

export const Label = styled.label`
  display: block;
  font-size: var(--size-med);
  transition: all 100ms linear;
  margin-bottom: var(--gap-max);
  

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
      margin-bottom: var(--gap-min)
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