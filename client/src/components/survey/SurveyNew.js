import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { sendSurvey } from '../../actions/authActions'

import InputGroup from '../common/InputGroup'
import NavSub from '../layout/NavSub'

class SurveyNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      back: true,
      title: '',
      subject: '',
      body: '',
      recipients: '',
      errors: {},
    }
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const newSurvey = {
      title: this.state.title,
      subject: this.state.subject,
      body: this.state.body,
      recipients: this.state.recipients,
    }
    this.props.sendSurvey(
      newSurvey,
      this.props.history
    )
  }

  handleQueryInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const  { user } = this.props.auth
    const { title, subject, body, recipients, errors } = this.state
    let createSurvey

    createSurvey = (
      <div className='createsurveyform'>
        <div className='content'>
          <form
            className='surveyform'
            onSubmit={this.handleSubmit}>
          </form>
        </div>
      </div>
    )


    return (
      <Fragment>
        <NavSub user={user} back={this.state.back}/>
        <main className='dashboard'>
          <div className="opacity">
            <div className="container">
              {createSurvey}
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {sendSurvey})(SurveyNew)
