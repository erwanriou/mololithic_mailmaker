import React, { Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/authActions'
import { fetchSurveys } from '../actions/surveyActions'

import PrivateRoute from './common/PrivateRoute'

import Nav from './layout/Nav'
import Landing from './layout/Landing'
import Feedback from './layout/Feedback'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './dashboard/Dashboard'
import SurveyNew from './survey/SurveyNew'
import Footer from './layout/Footer'

import '../styles/reset.css'
import '../styles/style.css'
import '../styles/dashboard.css'
import '../styles/feedback.css'
import '../styles/survey.css'
import '../styles/layout.css'
import '../styles/auth.css'
import '../styles/nav.css'
import '../styles/responsive.css'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchSurveys()
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/feedback' component={Feedback}/>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          <PrivateRoute exact path='/dashboard/new' component={SurveyNew}/>
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default withRouter(connect(null, { fetchUser, fetchSurveys })(App))
