import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import formFields from './formFields'
import { sendSurvey } from '../../actions/surveyActions'

class SurveyFormReview extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const { values } = this.props.form.surveyForm
    const newSurvey = {
      title: values.title,
      subject: values.subject,
      body: values.body,
      recipients: values.emails,
    }
    this.props.sendSurvey(
      newSurvey,
      this.props.history
    )
  }

  render() {
    const { onCancel, form } = this.props
    const { values } = this.props.form.surveyForm

    const reviewFields = formFields.map(({ name, label }) => (
      <div key={name} className='field'>
        <label>{label}</label>
        <p>{values[name]}</p>
      </div>
    ))

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          {reviewFields}
          <a href='#' onClick={onCancel}>
            <i className="fas fa-angle-left"></i>
            <span>Back</span>
          </a>
          <button type='submit'>
            <span>Submit</span>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
})

export default withRouter(connect(mapStateToProps, { sendSurvey })(SurveyFormReview))
