import React from 'react'
import WrapperCard from '../../components/WrapperCard'
import MainTitle from '../../components/MainTitle'
import MainButton from '../../components/MainButton'
import { Form, Label, Input, Legend, Fieldset } from './styles'

const week = [
  { id: 'monday', content: 'Segunda' },
  { id: 'tuesday', content: 'Terça' },
  { id: 'wednesday', content: 'Quarta' },
  { id: 'thursday', content: 'Quinta' },
  { id: 'friday', content: 'Sexta' },
  { id: 'saturday', content: 'Sábado' },
  { id: 'sunday', content: 'Domingo' },
  { id: 'holiday', content: 'Feriado' }
]

const ServiceForm = () => (
  <WrapperCard>
    <MainTitle>Insira o serviço</MainTitle>

    <Form>
      <Label for="name">Nome:</Label>
      <Input id="name" name="name" type="text" />

      <Fieldset>
        <Legend>Horários</Legend>

        {week.map(({ id, content }) => (
          <>
            <Label for={id}>{content}:</Label>
            <Input id={id} name={id} type="text" />
          </>
        ))}
      </Fieldset>

      <Label for="site">Site:</Label>
      <Input id="site" name="site" type="text" />

      <Label for="address">Endereço:</Label>
      <Input id="address" name="address" type="text" />

      <MainButton>Inserir</MainButton>
    </Form>
  </WrapperCard>
)

export default ServiceForm
