import React, { useState, useEffect } from 'react'

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

const DetailsService = ({ id }) => {
  const [service, setService] = useState({
    address: 'carregando...',
    category: 'car...',
    description: 'carregando...',
    concelho: '',
    createdAt: 'car...',
    district: '',
    friday_close: 'car...',
    friday_open: 'car...',
    friday_pause_finish: 'car...',
    friday_pause_start: 'car...',
    holiday_close: 'car...',
    holiday_open: 'car...',
    holiday_pause_finish: 'car...',
    holiday_pause_start: 'car...',
    monday_close: 'car...',
    monday_open: 'car...',
    monday_pause_finish: 'car...',
    monday_pause_start: 'car...',
    saturday_close: 'car...',
    saturday_open: 'car...',
    saturday_pause_finish: 'car...',
    saturday_pause_start: 'car...',
    site: 'carregando...',
    sunday_close: 'car...',
    sunday_open: 'car...',
    sunday_pause_finish: 'car...',
    sunday_pause_start: 'car...',
    thursday_close: 'car...',
    thursday_open: 'car...',
    thursday_pause_finish: 'car...',
    thursday_pause_start: 'car...',
    title: 'carregando...',
    tuesday_close: 'car...',
    tuesday_open: 'car...',
    tuesday_pause_finish: 'car...',
    tuesday_pause_start: 'car...',
    updatedAt: 'car...',
    wednesday_close: 'car...',
    wednesday_open: 'car...',
    wednesday_pause_finish: 'car...',
    wednesday_pause_start: 'car...'
  })

  const {
    address,
    district,
    description,
    friday_close,
    friday_open,
    friday_pause_finish,
    friday_pause_start,
    holiday_close,
    holiday_open,
    holiday_pause_finish,
    holiday_pause_start,
    monday_close,
    monday_open,
    monday_pause_finish,
    monday_pause_start,
    saturday_close,
    saturday_open,
    saturday_pause_finish,
    saturday_pause_start,
    site,
    sunday_close,
    sunday_open,
    sunday_pause_finish,
    sunday_pause_start,
    thursday_close,
    thursday_open,
    thursday_pause_finish,
    thursday_pause_start,
    title,
    tuesday_close,
    tuesday_open,
    tuesday_pause_finish,
    tuesday_pause_start,
    wednesday_close,
    wednesday_open,
    wednesday_pause_finish,
    wednesday_pause_start
  } = service

  return (
    <Wrapper>
      <Header>
        <MainTitle>{title}</MainTitle>
        <WrapperStars stars={4} />
        <ServiceValue value={3} />
      </Header>
      <Left>
        <Photo src={cafe} alt="Café" />
        <Description>{description}</Description>
      </Left>

      <Right>
        <WrapperWeekly>
          <Now>Aberto agora</Now>
          <Weekly>
            <Day>
              Segunda-feira{' '}
              <Schedule>{`${monday_open} - ${monday_pause_start} / ${monday_pause_finish} - ${monday_close}`}</Schedule>
            </Day>
            <Day>
              Terça-feira{' '}
              <Schedule>{`${tuesday_open} - ${tuesday_pause_start} / ${tuesday_pause_finish} - ${tuesday_close}`}</Schedule>
            </Day>
            <Day>
              Quarta-feira{' '}
              <Schedule>{`${wednesday_open} - ${wednesday_pause_start} / ${wednesday_pause_finish} - ${wednesday_close}`}</Schedule>
            </Day>
            <Day>
              Quinta-feira{' '}
              <Schedule>{`${thursday_open} - ${thursday_pause_start} / ${thursday_pause_finish} - ${thursday_close}`}</Schedule>
            </Day>
            <Day>
              Sexta-feira{' '}
              <Schedule>{`${friday_open} - ${friday_pause_start} / ${friday_pause_finish} - ${friday_close}`}</Schedule>
            </Day>
            <Day>
              Sábado{' '}
              <Schedule>{`${saturday_open} - ${saturday_pause_start} / ${saturday_pause_finish} - ${saturday_close}`}</Schedule>
            </Day>
            <Day>
              Domingo{' '}
              <Schedule>{`${sunday_open} - ${sunday_pause_start} / ${sunday_pause_finish} - ${sunday_close}`}</Schedule>
            </Day>
            <Day>
              Feriados{' '}
              <Schedule>{`${holiday_open} - ${holiday_pause_start} / ${holiday_pause_finish} - ${holiday_close}`}</Schedule>
            </Day>
          </Weekly>

          <Site>
            Site <Action href={`http://${site}`}>{site}</Action>
          </Site>
        </WrapperWeekly>

        <WrapperAddress>
          <Address>
            Localização
            <Street>{`${address} ${district}`}</Street>
          </Address>

          <Map />
        </WrapperAddress>

        <MainButton to="/">Contato</MainButton>
      </Right>
    </Wrapper>
  )
}

export default DetailsService
