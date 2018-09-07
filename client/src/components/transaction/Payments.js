import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


class Payments extends React.Component {
  render() {
    return (
        <StripeCheckout
          className='stripe'
          amount={500}
          currency="EUR"
          token={token => console.log(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}>
          <button>
            <i className="fas fa-shopping-cart"></i>
            <span>Add Credit</span>
          </button>
        </StripeCheckout>
    )
  }
}

export default Payments
