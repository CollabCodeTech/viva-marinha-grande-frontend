import styled from 'styled-components'
import { Logo, Image } from '../../components/MainLogo/styles'
import { Button } from '../../components/MainButton/styles'
import { Form, Input } from '../../components/MainSearch/styles'
import { container } from '../../styles/tools/base'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-top: var(--gap-max);
  margin-bottom: var(--gap-double-max);
  ${container}

  & > ${Logo} {
    display: flex;
    align-items: center;
    height: 100%;
  }

  & ${Image} {
    height: 100%;
    margin-right: var(--gap-min);
  }

  & > ${Form} {
    display: flex;
    justify-content: right;
    width: 60vw;
  }

  & ${Input} {
    margin-right: var(--gap-double-max);
    flex-grow: 2;
  }

  & ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 45px;
    max-width: 220px;
    min-width: 185px;
    padding: 0 var(--gap-max);
  }

  @media(max-width: 1100px) {
    height: 50px;

    & ${Input} {
      margin-right: var(--gap-max);
    }
  }

  @media(max-width: 830px) {
    height: 110px;
    position: relative;
    align-items: flex-start;

    & ${Logo} {
      height: auto;
    }

    & ${Image} {
      height: 45px;
    }

    & ${Form} {
      width: auto;
    }

    & ${Input} {
      position: absolute;
      width: calc(100vw - var(--gap-container) * 2);
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  @media(max-width: 540px) {
    position: static;
    flex-wrap: wrap;

    & ${Form} {
      display: block;
    }

    & ${Input} {
      position: static;
      transform: none;
      margin-right: 0;
    }

    & ${Button} {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      max-width: 100vw;
      box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.2);
    }
  }
`
