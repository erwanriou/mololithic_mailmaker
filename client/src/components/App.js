import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './common/PrivateRoute'

import Nav from './layout/Nav'
import Landing from './layout/Landing'
import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'
import Footer from './layout/Footer'

import '../styles/reset.css'
import '../styles/style.css'
import '../styles/layout.css'
import '../styles/nav.css'

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default App
