import styled from 'styled-components'

import filter from '../../img/filter.png'

export const Icon = styled.img.attrs({ src: filter })`
  display: none;
  width: 35px;
  margin-right: var(--gap-half-min);
  position: absolute;
  top: var(--gap-max);
  right: var(--gap-container);
`
