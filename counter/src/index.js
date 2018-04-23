import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

import { SkiDayList } from './components/SkiDayList'

window.React = React


const daysList = [
  {
    resort: "Squaw Valley",
    date: new Date("1/2/2016"),
    powder: true,
    backcountry: false
  },
  {
    resort: "Kirkwood",
    date: new Date("3/2/2016"),
    powder: false,
    backcountry: false
  },
  {
    resort: "Mt. Tallac",
    date: new Date("4/2/2016"),
    powder: false,
    backcountry: true
  }
]

render(
  <SkiDayList
    days={daysList}
  />,
  document.getElementById('react-container')
)
