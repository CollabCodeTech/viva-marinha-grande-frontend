import React from 'react'
import { Card, Photo, Title } from './styles'

import WrapperStars from '../WrapperStars'
import ServiceValue from '../ServiceValue'

const CardService = ({ business: { value, stars, title, photo } }) => (
  <Card>
    <dd>
      <Photo src={photo} alt="Placeholder" />
    </dd>

    <ServiceValue value={value} />

    <WrapperStars stars={stars} />

    <Title>{title}</Title>
  </Card>
)

export default CardService
