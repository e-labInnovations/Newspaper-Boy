import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/Home.jsx';
import Page404 from './404/404.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Page404} />
      </Switch>
    </Router>
    )
}

export default App