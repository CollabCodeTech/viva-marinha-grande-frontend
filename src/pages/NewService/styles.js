import styled from 'styled-components'
import { Title } from '../../components/MainTitle/styles'
import { Wrapper } from '../../components/WrapperCard/styles'
import { Header } from '../../containers/MainHeader/styles'
import { Button as MainButton } from '../../components/MainButton/styles'
import { Button as SearchButton } from '../../components/MainSearch/styles'

export const Main = styled.main`
  & ${Header} ${MainButton} {
    display: none;
  }

  & ${Header} ${SearchButton} {
    margin-right: 0;
  }

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
