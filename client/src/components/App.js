import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './common/PrivateRoute'
import Nav from './layout/Nav'
import Landing from './layout/Landing'
import Footer from './layout/Footer'

import '../styles/reset.css'
import '../styles/style.css'
import '../styles/nav.css'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing}/>
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default App
