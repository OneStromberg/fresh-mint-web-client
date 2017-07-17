import React, {Component} from 'react';
import Recipe from './recipe';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit
              <code>src/App.js</code>
              and save to reload.
            </p>
            <Recipe dataSource={dataSource}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
