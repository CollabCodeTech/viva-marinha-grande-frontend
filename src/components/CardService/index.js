import React from 'react'
import { Card, Photo, Title } from './styles'

import coffee from '../../img/coffee.png'
import WrapperStars from '../WrapperStars'
import ServiceValue from '../ServiceValue'

const CardService = ({ store: { value, stars, title } }) => (
  <Card>
    <dd>
      <Photo src={coffee} alt="Placeholder" />
    </dd>

    <ServiceValue value={value} />

    <WrapperStars stars={stars} />

    <Title>{title}</Title>
  </Card>
)

export default CardService
