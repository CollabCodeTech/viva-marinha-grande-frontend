import React from "react";
import { Card, Photo, Value, Star, Title, WrapperStart } from "./styles";

import coffee from '../../img/coffee.png'

const CardStore = () => (
  <Card>
    <dd>
      <Photo src={coffee} alt="Placeholder" />
    </dd>

    <Value>€€€</Value>

    <WrapperStart>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </WrapperStart>

    <Title>Cafeteria D’Arte</Title>
  </Card>
)

export default CardStore;
