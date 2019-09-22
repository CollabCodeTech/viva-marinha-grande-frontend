import styled from 'styled-components'
import { Button } from '../../components/MainButton/styles'

export const Main = styled.main`
  @media (max-width: 540px) {
    padding-bottom: var(--gap-double-max);

    & ${Button} {
      display: none;
    }
  }
`
