import React, { Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/authActions'

import PrivateRoute from './common/PrivateRoute'

import Nav from './layout/Nav'
import Landing from './layout/Landing'
import Login from './auth/Login'
import Dashboard from './dashboard/Dashboard'
import Footer from './layout/Footer'

import '../styles/reset.css'
import '../styles/style.css'
import '../styles/dashboard.css'
import '../styles/layout.css'
import '../styles/login.css'
import '../styles/nav.css'
import '../styles/responsive.css'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

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

export default withRouter(connect(null, { fetchUser })(App))
