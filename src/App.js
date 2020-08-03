import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./Component/Login"
import Profile from './Component/Profile'

import './App.css';

function App() {
  return (
        <Router>
          {/* <div>
            <Login />
          </div> */}
            <Switch>
              <Route path="/Profile">
                <Profile />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
        </Router>
          
  );
}

export default App;
