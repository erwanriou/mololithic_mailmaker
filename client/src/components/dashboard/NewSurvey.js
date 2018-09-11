import React, { Fragment } from 'react'
import { connect } from 'react-redux'

class NewSurvey extends React.Component {
  render() {
    const  { user } = this.props.auth
    return (
      <Fragment>
        NEW SURVEY
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(NewSurvey)
