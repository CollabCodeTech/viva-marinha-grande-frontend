import React from 'react'
import { Wrapper, Star } from './styles'

const WrapperStars = ({ stars }) => (
  <Wrapper>
    {[...Array(stars)].map((item, key) => (
      <Star key={key} />
    ))}
  </Wrapper>
)

export default WrapperStars
