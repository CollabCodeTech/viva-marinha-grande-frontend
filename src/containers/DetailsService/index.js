import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

const DetailsService = ({ id }) => {
  const [service, setService] = useState({
    address: 'carregando...',
    category: 'car...',
    description: 'carregando...',
    concelho: '',
    createdAt: 'car...',
    district: '',
    site: 'carregando...',
    title: 'carregando...',
    week: [
      {
        name: 'Segunda-feira',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      },
      {
        name: 'Terça-feira',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      },
      {
        name: 'Quarta-feira',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      },
      {
        name: 'Quinta-feira',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      },
      {
        name: 'Sexta-feira',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      },
      {
        name: 'Sábado',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      },
      {
        name: 'Domingo',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      },
      {
        name: 'Feriados',
        hours: {
          close: 'car...',
          open: 'car...',
          pause_finish: 'car...',
          pause_start: 'car...'
        }
      }
    ]
  })

  const { title, description, week, site, address, district, photo } = service
  const { REACT_APP_API } = process.env

  const printDay = day => {
    try {
      return day.hours.pause_start
        ? `${day.hours.open} - ${day.hours.pause_start} / ${day.hours.pause_finish} - ${day.hours.close}`
        : `${day.hours.open} - ${day.hours.close}`
    } catch (error) {
      return 'Fechado'
    }
  }

  useEffect(() => {
    async function getService() {
      const res = await axios.get(`${REACT_APP_API}/business/${id}`)
      setService(res.data)
    }

    getService()
  })

  return (
    <Wrapper>
      <Header>
        <MainTitle>{title}</MainTitle>
        <WrapperStars stars={4} />
        <ServiceValue value={3} />
      </Header>
      <Left>
        <Photo src={photo} alt="Café" />
        <Description>{description}</Description>
      </Left>

      <Right>
        <WrapperWeekly>
          <Now>Aberto agora</Now>
          <Weekly>
            {week.map((day, key) => (
              <Day key={day + key}>
                {day.name}
                <Schedule>{printDay(day)}</Schedule>
              </Day>
            ))}
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
