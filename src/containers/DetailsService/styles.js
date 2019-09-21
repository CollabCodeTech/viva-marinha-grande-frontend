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
  ${container}
  padding: var(--gap-double-max);
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
  }

  & > ${Value} {
    width: 100%;
    margin-bottom: var(--gap-max);
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-right: var(--gap-max);
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
`

export const Photo = styled.img`
  margin-bottom: var(--gap-double-max);
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

export const Weekly = styled.ol`
  color: var(--color-tamarind);
  font-weight: bold;
  margin-bottom: var(--gap-max);
`

export const Day = styled.li`
  display: flex;
  justify-content: space-between;
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

export const Address = styled.address`
  color: var(--color-tamarind);
  font-weight: bold;
  margin-bottom: var(--gap-min);
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
