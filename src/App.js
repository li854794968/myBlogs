import React, { Component } from 'react';
import RouterWrap from './router/Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterWrap/>
      </div>
    );
  }
}

export default App;