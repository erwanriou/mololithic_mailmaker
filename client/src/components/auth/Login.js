import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logIn } from '../../actions/authActions'

class Login extends React.Component {
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
              <a href='/auth/google' className="google">
                <i className="fab fa-google-plus-g"></i>
                <span>Sign In with google</span>
              </a>
              <a href='/auth/facebook' className="facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Sign In with facebook</span>
              </a>
              <form action="/api/users/login" method="post">
                <input
                  placeholder='Your Email'
                  name='email'
                  type='email'
                />
                <input
                  title='Required Password'
                  name='password'
                  type='password'
                />
                <button
                  type='submit'
                  className='submitbtn'>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Login
