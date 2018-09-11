import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import SurveyField from './SurveyField'

const FIELDS = [
  { name: 'title', label: 'the survey Title' },
  { name: 'subject', label: 'the subject title of your email' },
  { name: 'body', label: 'the content of your email' },
  { name: 'emails', label: 'your recipient List' },
]

class SurveyForm extends React.Component {
  renderFields() {
    return FIELDS.map(({ label, name }) =>
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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
  FIELDS.forEach(({ name, label }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  })
  return errors
}

export default reduxForm({ validate, form: 'surveyForm' })(SurveyForm)
