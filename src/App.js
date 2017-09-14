import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';

import Questions from './Questions';
import Poll from './Poll';
import NewQuestion from './NewQuestion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Questions} />
            <Route exact path='/questions/create' component={NewQuestion} />
            <Route exact path='/questions/:questionId' component={Poll} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
