import styled from 'styled-components'
import { Title } from '../../components/MainTitle/styles'

export const Wrapper = styled.main`
  text-align: center;

  & ${Title} {
    margin-bottom: var(--gap-max);
  }
`
