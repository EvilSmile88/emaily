import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions'
import { connect } from 'react-redux';
class PaymentsComponent extends React.Component {
  render() {
    return (
     <React.Fragment>
       12312
       <StripeCheckout
         name="Emaily"
         description="$5 for 5 email credits"
         token={token => this.props.addCredits(token)}
         amount={500}
         stripeKey={process.env.REACT_APP_STRIPE_KEY}
       >
         <button className='btn'>
           Add credits
         </button>
       </StripeCheckout>
     </React.Fragment>
    )
  }
}

export default connect(null, actions)(PaymentsComponent)