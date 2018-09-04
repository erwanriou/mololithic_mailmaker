import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Nav from './layout/Nav'

import '../styles/reset.css'
import '../styles/style.css'
import '../styles/nav.css'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
      </Fragment>
    )
  }
}

export default App
