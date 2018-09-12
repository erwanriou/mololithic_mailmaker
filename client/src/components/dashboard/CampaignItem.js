import React from 'react'
import Moment from 'react-moment'

class CampaignItem extends React.Component {
  render() {
    const { survey } = this.props
    return (
      <div className='campaigncontent created'>
        <div className='date'>Created the <Moment format='YYYY.MM.DD'>{survey.dateCreated}</Moment></div>
        <div className='content'>
          <h2>Campaign <strong>{survey.title}</strong></h2>
          <p>See the feedback of your survey sent on {survey.recipients.length} email(s)</p>
        </div>
      </div>
    )
  }
}

export default CampaignItem
