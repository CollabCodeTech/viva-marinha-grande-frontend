import React from 'react'
import { Card, Photo, Value, Star, Title, WrapperStart } from './styles'

import coffee from '../../img/coffee.png'

const CardService = ({ store: { value, stars, title } }) => (
  <Card>
    <dd>
      <Photo src={coffee} alt="Placeholder" />
    </dd>

    <Value>{[...Array(value)].map(() => '€')}</Value>

    <WrapperStart>
      {[...Array(stars)].map((item, key) => (
        <Star key={key} />
      ))}
    </WrapperStart>

    <Title>{title}</Title>
  </Card>
)

export default CardService
