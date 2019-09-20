import styled from 'styled-components'

import star from '../../img/star.png'

export const Card = styled.dl`
  box-sizing: border-box;
  width: 300px;
  padding-bottom: var(--gap-min);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
`
export const Photo = styled.img`
  width: 100%;
  margin-bottom: var(--gap-min);
`

export const Value = styled.dl`
  float: right;
  color: var(--color-kiwi);
  padding: 0 var(--gap-min);
`

export const WrapperStart = styled.dl`
  padding: 0 var(--gap-min);
  margin-bottom: var(--gap-half-min);
`

export const Star = styled.img.attrs({ src: star })``

export const Title = styled.dt`
  color: var(--color-sesame);
  font-size: var(--size-med);
  padding: 0 var(--gap-min);
`
