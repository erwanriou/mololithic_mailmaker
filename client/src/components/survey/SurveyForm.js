import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import SurveyField from './SurveyField'
import formFields from './formFields'
import { validateEmails } from '../../utils/validateEmails'


class SurveyForm extends React.Component {
  renderFields() {
    return formFields.map(({ label, name }) =>
		<Field
      key={name}
      component={SurveyField}
      type="text"
      label={label}
      name={name} />
		)
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to='/dashboard'>Cancel</Link>
          <button type='submit'>
            <span>Next</span>
            <i className="fas fa-angle-right"></i>
          </button>
        </form>
      </Fragment>
    )
  }
}

function validate(values) {
  const errors = {}
  errors.emails = validateEmails(values.emails || '')
  formFields.forEach(({ name, label }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  })

  return errors
}

export default reduxForm({ validate, form: 'surveyForm', destroyOnUnmount: false })(SurveyForm)
