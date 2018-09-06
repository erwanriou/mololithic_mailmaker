import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions/authActions'

import icon from '../../utils/images/emailicon.png'
import Spinner from '../common/Spinner'

class Nav extends React.Component {
  logout() {
    this.props.logOut()
  }
  render() {
    const  { isAuthenticated, user, loading } = this.props.auth

    const authLinks = (
      <Fragment>
        <img src={user.avatar} alt={user.name}/>
        <Link to='/dashboard'>Dashboard</Link>
        <Link
          to='/'
          onClick={this.logout.bind(this)}>
          Logout
        </Link>
      </Fragment>
    )

    const guestLinks = (
      <Link to='/login'>Sign In</Link>
    )

    return (
      <div className="nav">
        <div className="container">
          <div className="menu">
            <div className="title">
              <img src={icon} alt="Icon logo"/>
              <Link to='/'>MailMaker</Link>
            </div>
            <div className="auth">
              { isAuthenticated
                  ? loading
                      ? <Spinner />
                      : authLinks
                  : loading
                      ?  <Spinner />
                      : guestLinks
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default withRouter(connect(mapStateToProps, { logOut })(Nav))
