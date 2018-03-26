import React, { Component } from 'react';
import CustomRouter from './router';
import './styles/App.scss';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <CustomRouter />
      </Provider>
    );
  }
}

export default App;
