import React from 'react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  render() {
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <h1> Register in the application</h1>
              <h2> You can choose by Sign-Up with google, facebook or password authentification</h2>
            </div>
            <div className="auth">
              <a href='/auth/google' className="google">
                <i className="fab fa-google-plus-g"></i>
                <span>Sign Up with google</span>
              </a>
              <a href='/auth/facebook' className="facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Sign Up with facebook</span>
              </a>
              <form
                className='authform'
                action="/api/users/register"
                method="post">
                <input
                  placeholder='Your Name'
                  name='name'
                  type='name'
                />
                <input
                  placeholder='Your Email'
                  name='email'
                  type='email'
                />
                <input
                  placeholder='Required Password'
                  name='password'
                  type='password'
                />
                <input
                  placeholder='Required Password'
                  name='password2'
                  type='password2'
                />
                <button
                  type='submit'
                  className='submitbtn'>
                  Login
                </button>
              </form>
              <span>You already have an account?
                <Link to='/login'>Login</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Register
