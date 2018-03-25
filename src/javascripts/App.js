import React, { Component } from 'react';

import './App.scss';
import AppFooter from './components/container/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <AppFooter/>
      </div>
    );
  }
}

export default App;
