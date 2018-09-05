import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../../utils/images/emailicon.png'

class Landing extends React.Component {
  render() {
    const  { isAuthenticated } = this.props.auth
    let layoutContent

    isAuthenticated === true
      ? layoutContent = (
          <Fragment>
            <span>GO TO YOUR DASHBOARD</span>
          </Fragment>
        )
      : layoutContent = (
          <Fragment>
            <span>LOGIN</span>
          </Fragment>
        )
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <img src={logo} alt="icon logo"/>
              <h1> Welcome to the MailMaker Application!</h1>
              <h2> Create your own email campaign and analyse the result of your audiency</h2>
            </div>
            {layoutContent}
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
