import React, { Component } from 'react';
import Head from "./components/Head";
import SearchInput from "./components/SearchInput";
import Categories from "./components/Categories";
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <SearchInput />
        <Categories />
      </div>
    );
  }
}

export default App;
