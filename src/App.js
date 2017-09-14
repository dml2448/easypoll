import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './style/App.css';

import Questions from './components/Questions';
import Poll from './components/Poll';
import NewQuestion from './components/NewQuestion';

class App extends Component {
  render() {
    return (
      <div className="app">
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
