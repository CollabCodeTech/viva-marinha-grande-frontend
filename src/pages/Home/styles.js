import styled from 'styled-components'
import { Navigation } from '../../containers/MainMenu/styles'
import { Wrapper } from '../../containers/ShowServices/styles'
import { Header } from '../../containers/MainHeader/styles'

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > ${Header} {
    position: fixed;
    width: calc(100% - var(--gap-container) * 2);
    z-index: 1;
  }

  & > ${Navigation} {
    position: fixed;
    top: calc(var(--size-header) + var(--gap-double-max));
    width: 18vw;
  }

  & > ${Wrapper} {
    box-sizing: border-box;
    width: 76vw;
    margin-left: auto;
    padding-top: calc(var(--size-header) + var(--gap-double-max));
    padding-right: var(--gap-container);
  }
`
