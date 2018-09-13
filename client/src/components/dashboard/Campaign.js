import React, { Fragment }from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSurvey } from '../../actions/surveyActions'

import NavSub from '../layout/NavSub'
import Spinner from '../common/Spinner'

class Campaign extends React.Component {

  componentDidMount() {
    const { surveyId } = this.props.match.params
    surveyId && this.props.fetchSurvey(surveyId)
  }

  render() {
    const  { user } = this.props.auth
    const  { survey, loading } = this.props.surveys
    let campaignContent
    let campaignDetail1
    let campaignDetail2

    loading || survey.recipients === undefined
      ? campaignContent = <Spinner />
      : campaignContent = (
          <Fragment>
            <div className='leftdata'>Created the <Moment format='YYYY.MM.DD'>{survey.dateCreated}</Moment></div>
            <div className='content'>
              <h2>Campaign <strong>{survey.title}</strong></h2>
              <p>See the feedback of your survey sent on {survey.recipients.length} email(s)</p>
            </div>
          </Fragment>
        )

    loading || survey.recipients === undefined
      ? campaignDetail1 = <Spinner />
      : campaignDetail1 = (
          <Fragment>
            <div className='leftdata'><h3>Email Content</h3></div>
            <div className='content'>
              <p>{survey.subject}</p>
              <p>{survey.body}</p>
            </div>
          </Fragment>
        )

    loading || survey.recipients === undefined
      ? campaignDetail2 = <Spinner />
      : campaignDetail2 = (
          <Fragment>
            <div className='leftdata'><h3>Recipient List: <strong>{survey.recipients.length} email(s)</strong></h3></div>
            <div className='content'>
              { survey.recipients.map(recipient => (
                <div className='flexend' key={recipient._id}>
                  <p>the owner of the {recipient.email}</p>
                  { recipient.responded === true
                      ? <p><strong>have answer the survey</strong></p>
                      : <p>doesn't have answer the survey yet</p>
                  }
                </div>
              ))}
            </div>
          </Fragment>
        )

    return (
      <Fragment>
        <NavSub user={user}/>
        <main className='dashboard'>
          <div className="opacity">
            <div className="container">
              <Link className='campaignLink' to='/dashboard'>
                <i className="fas fa-angle-left"></i>
                <span>Go Back</span>
              </Link>
              <div className='campaigncontent mount'>
                {campaignContent}
              </div>
              <div className='campaigndetail mount'>
                {campaignDetail1}
              </div>
              <div className='campaigndetail mount'>
                {campaignDetail2}
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  surveys: state.surveys,
})

export default connect(mapStateToProps, { fetchSurvey })(Campaign)
