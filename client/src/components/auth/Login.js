import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logIn } from '../../actions/authActions'

class Login extends React.Component {
  login() {
    this.props.logIn()
  }
  render() {
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <h1> Login in the application</h1>
              <h2> You can choose by Sign-In with google, facebook or password authentification</h2>
            </div>
            <div className="login">
              <a href='/auth/google' onClick={this.login.bind(this)} className="google">
                <i className="fab fa-google-plus-g"></i>
                <span>Sign In with google</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }
}



export default withRouter(connect(null, {logIn})(Login))
