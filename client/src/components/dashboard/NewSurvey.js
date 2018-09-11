import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import SubNav from '../layout/SubNav'

class NewSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      back: true,
    }
  }
  render() {
    const  { user } = this.props.auth
    let createSurvey

   createSurvey = (
      <div className='createsurveyform'>
        <div className='content'>
          HERE LETS HAVE THE FORM TO CREATE THE SURVEY
        </div>
      </div>
    )


    return (
      <Fragment>
        <SubNav user={user} back={this.state.back}/>
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

export default connect(mapStateToProps)(NewSurvey)
