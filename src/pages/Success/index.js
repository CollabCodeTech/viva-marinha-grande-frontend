import React from 'react'
import MainHeader from '../../containers/MainHeader'
import WrapperCard from '../../components/WrapperCard'
import MainTitle from '../../components/MainTitle'
import { Subtitle } from '../../objects/Subtitle'
import { Wrapper } from './styles'

const Success = () => (
  <Wrapper>
    <MainHeader />
    <WrapperCard>
      <MainTitle>Inserido o seu negócio com sucesso!</MainTitle>
      <Subtitle>
        Por favor, aguarde a revisão dos administradores para que o seu negócio
        apareça no nosso portal
      </Subtitle>
    </WrapperCard>
  </Wrapper>
)

export default Success
