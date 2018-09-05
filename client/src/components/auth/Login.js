import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <h1> Login in the application</h1>
              <h2> You can choose by sign in with google, facebook or password authentification</h2>
            </div>
            <div className="login">
              <a href='/auth/google' className="google">
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



export default Login
