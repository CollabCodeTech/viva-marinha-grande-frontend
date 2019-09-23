import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

import './styles/index.css'
import Details from './pages/Details'
import NewService from './pages/NewService'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/details/:id" component={Details} />
      <Route path="/service/new" component={NewService} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
