import React, { Component } from 'react';
import './App.css'
import WaitingListContainer from './containers/WaitingListContainer';
import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
