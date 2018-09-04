import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component {
  render() {
    const  { isAuthenticated, user } = this.props.auth
    const authLinks = (
      <Link to='/profile'>Profile</Link>
    )

    const guestLinks = (
      <Link to='/login'>Login</Link>
    )

    return (
      <div className="nav">
        <div className="container">
          <div className="menu">
            <div className="title">
              <Link to='/'>MailMaker</Link>
            </div>
            <div className="auth">
              { isAuthenticated
                  ? authLinks
                  : guestLinks }
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

export default withRouter(connect(mapStateToProps)(Nav))
