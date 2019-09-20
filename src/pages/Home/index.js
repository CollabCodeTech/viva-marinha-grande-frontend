import React from 'react'
import MainHeader from '../../containers/MainHeader'
import MainMenu from '../../containers/MainMenu'
import { Main } from './styles'
import ShowServices from '../../containers/ShowServices'

const Home = () => (
  <Main>
    <MainHeader />
    <MainMenu />
    <ShowServices />
  </Main>
)

export default Home
