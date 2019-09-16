import React, {useState} from 'react';
import { Navigation, Title } from './styles';
import MainList from '../../components/MainList';

const MainMenu = () => {
  const [services, setServices] = useState([
    {
      id: 112,
      name: 'Alimentação',
      amount: 12,
      active: false
    },
    {
      id: 312,
      name: 'Animais',
      amount: 15,
      active: true
    },
    {
      id: 412,
      name: 'Art e cultura',
      amount: 24,
      active: false
    }
  ])

  const toggleActive = (id) => {
    setServices(old => old.map(service => service.id === id ? {...service, active: !service.active} : service))
  }

  return (
    <Navigation>
      <Title>Guia de Serviços</Title>

      <MainList items={services} onClick={toggleActive} />
    </Navigation> 
  )
};

export default MainMenu;