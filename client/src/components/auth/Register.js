import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { registerUser } from '../../actions/authActions'
import InputGroup from '../common/InputGroup'

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/dashboard')
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/dashboard')
    if (prevProps.errors !== this.props.errors) {
    this.setState({ errors: this.props.errors })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    this.props.registerUser(
      newUser,
      this.props.history
    )
  }

  handleQueryInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { name, email, password, password2, errors } = this.state
    return (
      <main className='layout'>
        <div className="opacity">
          <div className="container">
            <div className="title">
              <h1> Register in the application</h1>
              <h2> You can choose by Sign-Up with google, facebook or password authentification</h2>
            </div>
            <div className="auth register">
              <a href='/auth/google' className="google">
                <i className="fab fa-google-plus-g"></i>
                <span>Sign Up with google</span>
              </a>
              <a href='/auth/facebook' className="facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Sign Up with facebook</span>
              </a>
              <h3>Or Register here</h3>
              <form
                className='authform'
                onSubmit={this.handleSubmit}>
                <InputGroup
                  placeholder='Your name'
                  name='name'
                  value={name}
                  onChange={this.handleQueryInput}
                  error={errors.name}
                />
                <InputGroup
                  placeholder='Your Email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={this.handleQueryInput}
                  error={errors.email}
                />
                <InputGroup
                  placeholder='Required Password'
                  name='password'
                  value={password}
                  type='password'
                  onChange={this.handleQueryInput}
                  error={errors.password}
                />
                <InputGroup
                  placeholder='Confirm your Password'
                  name='password2'
                  value={password2}
                  type='password'
                  onChange={this.handleQueryInput}
                  error={errors.password}
                />
                <button type='submit'>
                  Register
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default withRouter(connect(mapStateToProps, { registerUser })(Register))
