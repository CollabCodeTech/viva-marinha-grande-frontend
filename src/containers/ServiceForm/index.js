import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WrapperCard from '../../components/WrapperCard'
import MainTitle from '../../components/MainTitle'
import MainButton from '../../components/MainButton'
import { Form, Legend, Fieldset } from './styles'
import TextField from '../../components/TextField'
import { Label } from '../../objects/Label'
import SelectField from '../../components/SelectFiled'
import TextareaField from '../../components/TextareaField'

const baseWeek = [
  { name: 'Segunda-feira', hours: {} },
  { name: 'Terça-feira', hours: {} },
  { name: 'Quarta-feira', hours: {} },
  { name: 'Quinta-feira', hours: {} },
  { name: 'Sexta-feira', hours: {} },
  { name: 'Sábado', hours: {} },
  { name: 'Domingo', hours: {} },
  { name: 'Feriado', hours: {} }
]

const ServiceForm = () => {
  const [service, setService] = useState({
    category: 'Alimentação',
    week: baseWeek
  })
  const [categories, setCategories] = useState([])
  const send = async () => {
    await axios.post('http://localhost:5000/service', service)
  }
  const change = ({ target }) => {
    const { name, value } = target
    const dataNameDay = target.getAttribute('data-nameDay')

    setService(old => {
      let { week } = old

      if (dataNameDay) {
        return {
          ...old,
          week: week.map(day =>
            day.name === dataNameDay
              ? { name: dataNameDay, hours: { ...day.hours, [name]: value } }
              : day
          )
        }
      }

      return { ...old, ...{ [name]: value } }
    })
  }

  useEffect(() => {
    async function getAllCategories() {
      const res = await axios.get('http://localhost:5000/category')
      setCategories(res.data)
    }

    getAllCategories()
  }, [])

  return (
    <WrapperCard>
      <MainTitle>Insira o seu negócio</MainTitle>

      <Form>
        <TextField name="title" content="Nome:" onChange={change} />

        <TextField name="site" content="Site:" onChange={change} />

        <SelectField
          name="category"
          content="Categoria:"
          options={categories}
          onChange={change}
        />

        <TextareaField
          name="description"
          content="Descrição:"
          onChange={change}
        />

        <Fieldset>
          <Legend>Horários</Legend>

          {baseWeek.map(({ name }, key) => (
            <Fieldset day key={name + key}>
              <Label full>{name}:</Label>

              <TextField
                dataNameDay={name}
                name="open"
                content="Abertura:"
                three
                onChange={change}
              />

              <TextField
                dataNameDay={name}
                name="pause_start"
                content="Início pausa:"
                four
                onChange={change}
              />

              <TextField
                dataNameDay={name}
                name="pause_finish"
                content="Fim pausa:"
                four
                onChange={change}
              />

              <TextField
                dataNameDay={name}
                name="close"
                content="Encerramento:"
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

        <MainButton to="/success" onClick={send}>
          Inserir
        </MainButton>
      </Form>
    </WrapperCard>
  )
}

export default ServiceForm
