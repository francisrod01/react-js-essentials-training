import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'

window.React = React

render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/list-days" component={App} />
    <Route path="/add-day" component={App} />
    <Route path="*" component={Whoops404} />
  </Router>,
  document.getElementById('react-container')
)
