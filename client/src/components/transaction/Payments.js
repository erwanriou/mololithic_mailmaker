import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { handleCredit } from '../../actions/authActions'


class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name='mailmaker'
        description='Add credit to your account to be able to send email campaign'
        className='stripe'
        amount={500}
        currency="EUR"
        token={token => this.props.handleCredit(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button>
          <i className="fas fa-shopping-cart"></i>
          <span>Add Credit</span>
        </button>
      </StripeCheckout>
    )
  }
}

export default connect(null, { handleCredit })(Payments)
