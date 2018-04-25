import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import './app.css'

// import routes from './routes'
import Member from './components/ui/Member'

window.React = React


const member = (
  <Member admin={true}
    name="Edna Welch"
    email="edna.welch88@example.com"
    thumbnail="https://randomuser.me/api/portraits/women/90.jpg"
    makeAdmin={(email) => console.log(email)}
  />
)

render(member, document.getElementById('react-container'))
