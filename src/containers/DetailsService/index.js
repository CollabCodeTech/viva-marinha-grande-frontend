import React from 'react'

import MainTitle from '../../components/MainTitle'
import WrapperStars from '../../components/WrapperStars'
import ServiceValue from '../../components/ServiceValue'
import MainButton from '../../components/MainButton'
import {
  Wrapper,
  Photo,
  Description,
  Now,
  Weekly,
  Day,
  Schedule,
  Site,
  Action,
  Address,
  Street,
  Map,
  Left,
  Header,
  Right,
  WrapperAddress,
  WrapperWeekly
} from './styles'

import cafe from '../../img/cafe.jpg'

const DetailsService = () => (
  <Wrapper>
    <Header>
      <MainTitle>Cafeteria D’Arte</MainTitle>
      <WrapperStars stars={4} />
      <ServiceValue value={3} />
    </Header>
    <Left>
      <Photo src={cafe} alt="Café" />
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
        voluptates repellendus accusamus aspernatur magni fugit, quis ex alias
        velit in sequi nisi odit expedita eius error! Non, nulla consequatur.
        Odit?
      </Description>
    </Left>

    <Right>
      <WrapperWeekly>
        <Now>Aberto agora</Now>
        <Weekly>
          <Day>
            Segunda <Schedule>09:00 - 14:00 / 16:00 - 22:00</Schedule>
          </Day>
          <Day>
            Terça <Schedule>09:00 - 14:00 / 16:00 - 22:00</Schedule>
          </Day>
          <Day>
            Quarta <Schedule>09:00 - 14:00 / 16:00 - 22:00</Schedule>
          </Day>
          <Day>
            Quinta <Schedule>09:00 - 14:00 / 16:00 - 22:00</Schedule>
          </Day>
          <Day>
            Sexta <Schedule>09:00 - 14:00 / 16:00 - 22:00</Schedule>
          </Day>
          <Day>
            Sábado <Schedule>09:00 - 14:00 / 16:00 - 22:00</Schedule>
          </Day>
          <Day>
            Domingo <Schedule>09:00 - 14:00 / 16:00 - 22:00</Schedule>
          </Day>
          <Day>
            Feriados <Schedule>Fechado</Schedule>
          </Day>
        </Weekly>

        <Site>
          Site <Action>facebook.com/CafetariadArte.mg</Action>
        </Site>
      </WrapperWeekly>

      <WrapperAddress>
        <Address>
          Endereço
          <Street>Praça Guilherme Stephens, 2430-241 M.nha Grande</Street>
        </Address>

        <Map />
      </WrapperAddress>

      <MainButton>Contato</MainButton>
    </Right>
  </Wrapper>
)

export default DetailsService
