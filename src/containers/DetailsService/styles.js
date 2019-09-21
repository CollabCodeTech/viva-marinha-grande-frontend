import styled from 'styled-components'
import { container } from '../../styles/tools/base'

import map from '../../img/maps.png'
import { Value } from '../../components/ServiceValue/styles'
import { Wrapper as Stars } from '../../components/WrapperStars/styles'
import { Title } from '../../components/MainTitle/styles'
import { Button } from '../../components/MainButton/styles'

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 70%;

  & > ${Title} {
    margin-bottom: var(--gap-max);
  }

  & > ${Stars} {
    margin-left: auto;
    padding-left: 0;
  }

  & > ${Value} {
    width: 100%;
    margin-bottom: var(--gap-max);
    padding-left: 0;
  }

  @media (max-width: 1090px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    & > ${Title} {
      margin-bottom: var(--gap-min);
    }

    & > ${Stars} {
      width: 100%;
      margin-left: 0;
    }
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-right: var(--gap-max);

  @media (max-width: 1090px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: var(--gap-double-max);
  }
`

export const Right = styled.div`
  width: 28%;

  & > ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    width: 100%;
    height: 50px;
    margin-top: auto;
  }

  @media (max-width: 1090px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`

export const Photo = styled.img`
  margin-bottom: var(--gap-double-max);
  width: 100%;
`

export const Description = styled.p`
  background-color: var(--color-coconut);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.35);
  color: var(--color-tamarind);
  font-size: var(--color-med);
  padding: var(--gap-max);
`

export const Now = styled.strong`
  display: block;
  color: var(--color-kiwi);
  font-weight: bold;
  font-size: var(--size-med);
  margin-bottom: var(--gap-min);
`

export const WrapperWeekly = styled.section`
  @media (max-width: 1090px) {
    display: inline-flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    width: 35%;
  }

  @media (max-width: 870px) {
    width: 42%;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`

export const Weekly = styled.ol`
  color: var(--color-tamarind);
  font-weight: bold;
  margin-bottom: var(--gap-max);

  @media (max-width: 340px) {
    font-size: var(--size-half-med);
  }
`

export const Day = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-half-min);

  &:nth-child(odd) {
    background-color: var(--color-light-blueberry);
    color: var(--color-light-sasame);
  }
`

export const Schedule = styled.span`
  margin-left: auto;
  color: var(--color-sasame);
`

export const Site = styled.p`
  color: var(--color-tamarind);
  font-weight: bold;
  margin-bottom: var(--gap-max);
`

export const Action = styled.a`
  color: var(--color-blueberry);
`

export const WrapperAddress = styled.section`
  @media (max-width: 1090px) {
    order: -1;
    width: 62%;
  }

  @media (max-width: 870px) {
    width: 55%;
  }

  @media (max-width: 710px) {
    width: 100%;
  }
`

export const Address = styled.address`
  color: var(--color-tamarind);
  font-weight: bold;
  margin-bottom: var(--gap-min);

  @media (max-width: 1090px) {
    width: 100%;
  }
`

export const Street = styled.span`
  display: block;
  color: var(--color-sasame);
`

export const Map = styled.img.attrs({ src: map })`
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.35);
  margin-bottom: var(--gap-double-max);
`
