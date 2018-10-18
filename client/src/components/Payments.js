import React from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
import Payments from '@bit/evilsmile88.shared_comp.shared-components.payments'
class PaymentsComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        12312
        <Payments addCredits={this.props.addCredits}/>
      </React.Fragment>
    )
  }
}

export default connect(null, actions)(PaymentsComponent)