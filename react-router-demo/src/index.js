import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import './app.css'

// import routes from './routes'
import MemberList from './components/ui/MemberList'

window.React = React

render(<MemberList />, document.getElementById('react-container'))
