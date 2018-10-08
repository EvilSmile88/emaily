import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../actions";

import Header from './Header'
import Landing from './Landing'
import { Switch } from 'react-router-dom';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(process.env)
    return (
      <div className="container">
        <BrowserRouter>
          <React.Fragment>
            <Header/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/surveys" component={Dashboard}/>
              <Route path="/surveys/new" component={SurveyNew}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}
export default connect(mapStateToProps, actions)(App);
