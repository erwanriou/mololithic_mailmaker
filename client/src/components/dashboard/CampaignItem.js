import React from 'react'
import Moment from 'react-moment'
import { Link, withRouter } from 'react-router-dom'

class CampaignItem extends React.Component {
  render() {
    const { survey } = this.props
    return (
      <Link className='campaigncontent created' to={`/dashboard/campaign/${survey._id}`}>
        <div className='date'>Created the <Moment format='YYYY.MM.DD'>{survey.dateCreated}</Moment></div>
        <div className='content'>
          <h2>Campaign <strong>{survey.title}</strong></h2>
          <p>See the feedback of your survey sent on {survey.recipients.length} email(s)</p>
        </div>
      </Link>
    )
  }
}

export default withRouter(CampaignItem)
