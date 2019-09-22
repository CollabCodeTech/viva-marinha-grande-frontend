import styled from 'styled-components'
import { Button } from '../../components/ClearButton/styles'
import { Icon as Close } from '../../components/IconClose/styles'

export const Navigation = styled.nav`
  position: relative;
  background-color: var(--color-coconut);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  margin-left: var(--gap-container);
  padding: var(--gap-med);

  & > ${Close} {
    width: 35px;
    position: absolute;
    top: calc(var(--gap-med) / 2);
    right: calc(var(--gap-med) / 2);
  }

  & ${Button} {
    width: 140px;
    height: 45px;
  }
`

export const Title = styled.h1`
  margin-bottom: var(--gap-double-max);
  font-weight: bold;
  font-size: var(--size-max);
  color: var(--color-sasame);
  letter-spacing: 1px;
`

export const Actions = styled.div`
  position: relative;
  text-align: center;
  padding-top: var(--gap-max);
  padding-bottom: var(--gap-max);
  margin-top: var(--gap-max);

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(var(--gap-med) * -1);
    width: calc(100% + var(--gap-med) * 2);
    height: 2px;
    background-color: var(--color-tamarind);
    opacity: 0.6;
  }
`
