import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {login} from './login';
import {register} from './register';
import MapPage from "./mappage";
import mapToronto from './maptoronto';
import {Confirm} from './confirm';

import './App.css';
import booking from "./booking";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Route path="/login" component={login}/>
              <Route path="/register" component={register}/>
              <Route path="/mappage" component={MapPage}/>
              <Route path="/booking" component={booking}/>
              <Route path="/maptoronto" component={mapToronto}/>
              <Route path="/confirm" component={Confirm}/>
          </div>
      </Router>
    );
  }
}

export default App;
