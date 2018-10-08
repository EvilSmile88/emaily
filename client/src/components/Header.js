import React from 'react';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import {connect} from 'react-redux';
class Header extends React.Component {
  renderContent() {
    switch (this.props.auth.user) {
      case null:
        return  (
          <li>
            <span>'Fetching...'</span>
          </li>
        );
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
         <React.Fragment>
           <li>
             <Payments/>
           </li>
           <li style={{margin: "0 10px"}}>Credits: {this.props.auth.user.credits/100}</li>
           <li>
             <a href="/api/logout">Logout</a>
           </li>
         </React.Fragment>
      );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            style={{margin: "0px 10px"}}
            to={this.props.auth.user ? "/surveys" : "/"}
            className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}
function mapStateToProps({ auth }) {
  return {
    auth
  };
}
export default connect(mapStateToProps, null)(Header);