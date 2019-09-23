import styled from 'styled-components'
import { Title } from '../../components/MainTitle/styles'
import { Wrapper } from '../../components/WrapperCard/styles'

export const Main = styled.main`
  & ${Title} {
    text-align: center;
    margin-bottom: var(--gap-double-max);
  }

  & > ${Wrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
