import React, { useState } from 'react'
import axios from 'axios'
import WrapperCard from '../../components/WrapperCard'
import MainTitle from '../../components/MainTitle'
import MainButton from '../../components/MainButton'
import { Form, Legend, Fieldset } from './styles'
import TextField from '../../components/TextField'
import { Label } from '../../components/TextField/styles'

const week = [
  { name: 'monday', content: 'Segunda-feira' },
  { name: 'tuesday', content: 'Terça-feira' },
  { name: 'wednesday', content: 'Quarta-feira' },
  { name: 'thursday', content: 'Quinta-feira' },
  { name: 'friday', content: 'Sexta-feira' },
  { name: 'saturday', content: 'Sábado' },
  { name: 'sunday', content: 'Domingo' },
  { name: 'holiday', content: 'Feriado' }
]

const ServiceForm = () => {
  const [service, setService] = useState({})
  const send = async () => {
    const ser = await axios.post('http://localhost:5000/service', service)
    console.log(ser)
  }
  const change = ({ target: { name, value } }) => {
    setService(old => ({ ...old, ...{ [name]: value } }))
  }

  return (
    <WrapperCard>
      <MainTitle>Insira o serviço</MainTitle>

      <Form>
        <TextField name="title" content="Nome:" onChange={change} />

        <TextField name="site" content="Site:" onChange={change} />

        <Fieldset>
          <Legend>Horários</Legend>

          {week.map(({ name, content }) => (
            <Fieldset day key={content + name}>
              <Label full>{content}:</Label>

              <TextField
                name={`${name}_open`}
                content="Hora de abertura:"
                three
                onChange={change}
              />

              <TextField
                name={`${name}_lunch`}
                content="Hora de almoço:"
                three
                onChange={change}
              />

              <TextField
                name={`${name}_close`}
                content="Hora de encerramento:"
                three
                onChange={change}
              />
            </Fieldset>
          ))}
        </Fieldset>

        <Fieldset>
          <Legend>Localização do negócio</Legend>
          <TextField name="address" content="Localização:" onChange={change} />

          <TextField name="district" content="Distrito:" onChange={change} />

          <TextField name="concelho" content="Concelho:" onChange={change} />
        </Fieldset>

        <MainButton onClick={send}>Inserir</MainButton>
      </Form>
    </WrapperCard>
  )
}

export default ServiceForm
