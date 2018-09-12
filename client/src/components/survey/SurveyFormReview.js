import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import formFields from './formFields'

const SurveyFormReview = ({ onCancel, form }) => {
  const { values, fields } = form.surveyForm
  const reviewFields = formFields.map(field => (
    <div className='field'>
      <label>{field.label}</label>
      <p>{values[field.name]}</p>
    </div>
  ))

  return (
    <Fragment>
      <form>
        {reviewFields}
        <a href='#' onClick={onCancel}>
          <i className="fas fa-angle-left"></i>
          <span>Back</span>
        </a>
      </form>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  form: state.form,
})

export default connect(mapStateToProps)(SurveyFormReview)
