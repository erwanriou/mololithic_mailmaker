import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../../utils/images/emailicon.png'
import Spinner from '../common/Spinner'

class Landing extends React.Component {
  render() {
    const  { isAuthenticated, loading } = this.props.auth
    let layoutContent

    isAuthenticated === false
      ? loading
          ? layoutContent = <Spinner />
          : layoutContent = (
              <Fragment>
                <Link to='/login'>Sign In</Link>
              </Fragment>
            )
      : loading
          ? layoutContent = <Spinner />
          : layoutContent = (
              <Fragment>
                <Link to='/dashboard'> Go to your Dashboard</Link>
              </Fragment>
            )
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <img className="logo" src={logo} alt="icon logo"/>
              <h1> Welcome to the MailMaker Application!</h1>
              <h2> Create your own email marketing campaign and collect feedback from your users</h2>
            </div>
            <div className="button">
              {layoutContent}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Landing))
