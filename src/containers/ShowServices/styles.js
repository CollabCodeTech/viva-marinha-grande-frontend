import styled from 'styled-components'
import { Card } from '../../components/CardService/styles'

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &::before {
    content: '';
    position: fixed;
    top: var(--size-header);
    left: 0;
    width: 100%;
    height: var(--gap-double-max);
    background-image: linear-gradient(var(--color-titanium) 50%, transparent);
  }

  & > a {
    text-decoration: none;
  }

  & ${Card} {
    margin-left: var(--gap-max);
    margin-bottom: var(--gap-double-max);
  }
`
