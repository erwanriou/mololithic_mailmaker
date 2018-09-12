import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import NavSub from '../layout/NavSub'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: true,
      showFormReview: false,
    }
  }

  render() {
    const  { user } = this.props.auth
    const { showForm, showFormReview } = this.state
    let createSurvey

    showFormReview
      ? createSurvey = (
          <div className='createsurveyform'>
            <h2>Review your survey before sending it!</h2>
            <SurveyFormReview onCancel={() => {
              this.setState({ showFormReview: false })
            }}/>
          </div>
        )
      : createSurvey = (
          <div className='createsurveyform'>
            <h2>Fill out the Survey form to create your email campaign!</h2>
            <SurveyForm onSurveySubmit={() => {
              this.setState({ showFormReview: true })
            }}/>
          </div>
        )

    return (
      <Fragment>
        <NavSub user={user} step1={showForm} step2={showFormReview}/>
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

SurveyNew = reduxForm({ form: 'surveyForm' })(SurveyNew)
export default connect(mapStateToProps)(SurveyNew)
