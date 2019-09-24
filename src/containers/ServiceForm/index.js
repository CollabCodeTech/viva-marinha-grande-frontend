import React from 'react'
import WrapperCard from '../../components/WrapperCard'
import MainTitle from '../../components/MainTitle'
import MainButton from '../../components/MainButton'
import { Form, Label, Input, Legend, Fieldset } from './styles'

const week = [
  { id: 'monday', content: 'Segunda-feira' },
  { id: 'tuesday', content: 'Terça-feira' },
  { id: 'wednesday', content: 'Quarta-feira' },
  { id: 'thursday', content: 'Quinta-feira' },
  { id: 'friday', content: 'Sexta-feira' },
  { id: 'saturday', content: 'Sábado' },
  { id: 'sunday', content: 'Domingo' },
  { id: 'holiday', content: 'Feriado' }
]

const ServiceForm = () => (
  <WrapperCard>
    <MainTitle>Insira o serviço</MainTitle>

    <Form>
      <Label>
        Nome:
        <Input name="name" type="text" />
      </Label>

      <Label>
        Site:
        <Input name="site" type="text" />
      </Label>

      <Fieldset>
        <Legend>Horários</Legend>

        {week.map(({ id, content }) => (
          <Fieldset day>
            <Label full>{content}:</Label>
            <Label three>
              Hora de abertura:
              <Input id={id} name={id} type="text" />
            </Label>

            <Label three>
              Hora de almoço:
              <Input id={id} name={id} type="text" />
            </Label>

            <Label three>
              Hora de encerramento:
              <Input id={id} name={id} type="text" />
            </Label>
          </Fieldset>
        ))}
      </Fieldset>

      <Fieldset>
        <Legend>Localização do negócio</Legend>
        <Label>
          Localização:
          <Input name="address" type="text" />
        </Label>

        <Label>
          Distrito:
          <Input name="district" type="text" />
        </Label>

        <Label>
          Concelho:
          <Input name="concelho" type="text" />
        </Label>
      </Fieldset>

      <MainButton>Inserir</MainButton>
    </Form>
  </WrapperCard>
)

export default ServiceForm
