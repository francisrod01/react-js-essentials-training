import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import './app.css'

import routes from './routes'

window.React = React

render(routes, document.getElementById('react-container'))
