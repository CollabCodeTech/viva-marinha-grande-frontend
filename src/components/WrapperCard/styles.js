import styled from 'styled-components'
import { container } from '../../styles/tools/base'

export const Wrapper = styled.main`
  background-color: var(--color-coconut);
  padding: var(--gap-double-max);
  ${container}

  @media (max-width: 1210px) {
    margin: 0;
    padding: var(--gap-double-max) var(--gap-max);
  }

  @media (max-width: 710px) {
    padding-left: var(--gap-med);
    padding-right: var(--gap-med);
  }
`
