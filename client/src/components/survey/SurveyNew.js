import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { sendSurvey } from '../../actions/authActions'

import NavSub from '../layout/NavSub'
import SurveyForm from './SurveyForm'

class SurveyNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      back: true,
    }
  }

  render() {
    const  { user } = this.props.auth
    const { back } = this.state
    let createSurvey

    createSurvey = (
      <div className='createsurveyform'>
        <h2>Fill out the Survey form to create your email campaign...</h2>
        <SurveyForm />
      </div>
    )


    return (
      <Fragment>
        <NavSub user={user} back={back}/>
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
