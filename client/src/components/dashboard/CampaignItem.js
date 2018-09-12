import React from 'react'

class CampaignItem extends React.Component {
  render() {
    const { survey } = this.props
    return (
      <div className='campaigncontent'>
        <h2>Campagn title is {survey.title}</h2>
      </div>
    )
  }
}

export default CampaignItem
