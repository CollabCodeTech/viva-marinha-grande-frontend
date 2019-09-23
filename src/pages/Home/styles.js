import styled from 'styled-components'
import { Navigation } from '../../containers/MainMenu/styles'
import { Wrapper as Services } from '../../containers/ShowServices/styles'
import { Header } from '../../containers/MainHeader/styles'
import { Icon } from '../../components/IconFilter/styles'
import { Icon as Close } from '../../components/IconClose/styles'
import { Card } from '../../components/CardService/styles'

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &::after {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: var(--color-light-tamarind);
    opacity: 0;
    transition: opacity 180ms linear;
  }

  @media (max-width: 1500px) {
    &::after {
      opacity: ${({ activeMenu }) => activeMenu && '0.8'};
      z-index: ${({ activeMenu }) => activeMenu && '1'};
    }
  }

  & > ${Header} {
    position: fixed;
    width: calc(100% - var(--gap-container) * 2);
    z-index: 1;
    padding-left: calc(var(--gap-container) + var(--gap-med));

    @media (max-width: 540px) {
      padding-left: var(--gap-container);
    }
  }

  & ${Icon} {
    @media (max-width: 540px) {
      display: block;
    }
  }

  & > ${Navigation} {
    --size-menu: 0.4;

    position: fixed;
    top: calc(var(--size-header) + var(--gap-double-max));
    width: 18vw;
    min-width: 260px;
    min-height: 720px;

    @media (max-width: 1500px) {
      top: 0;
      left: 0;
      height: 100vh;
      margin-left: 0;
      z-index: 2;
      transform: ${({ activeMenu }) =>
        activeMenu ? 'translateX(0)' : 'translateX(-100%)'};
      transition: transform 200ms linear;

      &:hover {
        transform: translateX(0);
      }

      &::after {
        content: 'Filtros';
        display: flex;
        font-size: calc(var(--gap-container) * var(--size-menu));
        justify-content: center;
        align-items: center;
        writing-mode: vertical-rl;
        text-transform: uppercase;
        letter-spacing: 10px;
        text-orientation: upright;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(100%);
        width: var(--gap-container);
        height: 100vh;
        background-color: var(--color-coconut);
        box-shadow: 3px 0px 3px rgba(0, 0, 0, 0.4);
        border-left: 2px solid var(--color-light-tamarind);
        color: var(--color-strawberry);
        cursor: pointer;
      }
    }

    @media (max-width: 940px) {
      --size-menu: 0.7;
    }

    @media (max-width: 540px) {
      left: auto;
      right: 0;
      transform: ${({ activeMenu }) =>
        activeMenu ? 'translateX(0)' : 'translateX(100%)'};

      &:hover {
        transform: translateX(100%);
      }

      &::after {
        display: none;
      }

      & > ${Close} {
        display: block;
      }
    }
  }

  & > ${Services} {
    box-sizing: border-box;
    width: 76vw;
    margin-left: auto;
    padding-top: calc(var(--size-header) + var(--gap-double-max));
    padding-right: var(--gap-container);

    @media (max-width: 1500px) {
      width: 100%;
      margin-left: var(--gap-container);
    }

    @media (max-width: 830px) {
      padding-top: calc(var(--size-header) + var(--gap-double-max) + 70px);

      &:before {
        top: 120px;
      }
    }

    @media (max-width: 540px) {
      & ${Card} {
        margin-left: 0;
      }
    }
  }
`
