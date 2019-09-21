import styled from 'styled-components'

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

export const Title = styled.dt`
  color: var(--color-sasame);
  font-size: var(--size-med);
  padding: 0 var(--gap-min);
  font-weight: bold;
`
