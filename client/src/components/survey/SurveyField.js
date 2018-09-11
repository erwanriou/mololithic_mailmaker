import React from 'react'
import classnames from 'classnames'

const SurveyField = ({ input, label, meta: { error, touched} }) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <input {...input} />
      <span>{ touched && error }</span>
    </div>
  )
}

export default SurveyField
