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

import cafe from '../../img/cafe.jpg'

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

  const { title, description, week, site, address, district } = service

  useEffect(() => {
    async function getService() {
      const res = await axios.get(`http://localhost:5000/service/${id}`)
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
        <Photo src={cafe} alt="Café" />
        <Description>{description}</Description>
      </Left>

      <Right>
        <WrapperWeekly>
          <Now>Aberto agora</Now>
          <Weekly>
            {week.map(
              (
                { name, hours: { open, close, pause_start, pause_finish } },
                key
              ) => (
                <Day key={open + key}>
                  {name}
                  <Schedule>{`${open} - ${pause_start} / ${pause_finish} - ${close}`}</Schedule>
                </Day>
              )
            )}
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
