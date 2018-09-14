import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import isEmpty from '../../utils/isEmpty'
import NavSub from '../layout/NavSub'
import CampaignFeed from './CampaignFeed'

class Dashboard extends React.Component {
  render() {
    const { user } = this.props.auth
    const { surveyList } = this.props.surveys
    let creditCheck
    let campaignContent

    user.credits > 0
      ? creditCheck = (
          <Link className='createsurveyitem credit' to='/dashboard/campaign/new'>
            <i className="fas fa-pen"></i>
            <div className='content'>
              <h2>New Survey</h2>
              <p>Click here to create a new marketing email campaign</p>
              <p>It will cost you 1 credit of yours {user.credits} credit(s) and you will have {user.credits -1} credit(s)</p>
            </div>
          </Link>
        )
      : creditCheck = (
          <div className='createsurveyitem nocredit'>
            <i className="fas fa-exclamation"></i>
            <div className='content'>
              <h2>You don't have enough credit to create a New Survey</h2>
              <p>Buy more credit before by clicking 'add credits' and don't worry, payment is in test mode</p>
              <p>Use the credit card 4242 4242 4242 4242 to pay!</p>
            </div>
          </div>
        )

    isEmpty(surveyList) === true
      ? campaignContent = (
          <div className='campaigncontent notcreated'>
            <div className='content'>
              <h2>You don't have created any Marketing Campaign Survey Yet!</h2>
              <p>add one by click on the field on top</p>
            </div>
          </div>
        )
      : campaignContent = (
          <CampaignFeed surveys={surveyList} />
        )

    return (
      <Fragment>
        <NavSub user={user} />
        <main className='dashboard'>
          <div className="opacity">
            <div className="container">
              {creditCheck}
              {campaignContent}
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

export default connect(mapStateToProps)(Dashboard)
