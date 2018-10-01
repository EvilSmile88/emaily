import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
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
  );
};

export default App;
