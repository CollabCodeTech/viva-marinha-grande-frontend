import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

import './styles/index.css'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
