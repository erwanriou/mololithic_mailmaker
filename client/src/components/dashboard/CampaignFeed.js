import React from 'react'
import PropTypes from 'prop-types'
import CampaignItem from './CampaignItem'

class CampaignFeed extends React.Component {
  render() {
    const { surveys } = this.props
    return surveys.reverse().map(survey =>
      <CampaignItem
        key={survey._id}
        survey={survey}
      />
    )
  }
}

CampaignFeed.propTypes = {
  surveys: PropTypes.array.isRequired,
}

export default CampaignFeed
