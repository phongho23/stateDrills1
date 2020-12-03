import React, { Component } from 'react';
import './App.css';
import TheDate from './state/TheDate';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import HelloWorld from './state-drills/HelloWorld';
import Counter from './state/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>The Date</h2>
        <TheDate />

        <h2>Bomb</h2>
        <Bomb />

        <h2>Roulette Gun</h2>
        <RouletteGun />

        <h2>HelloWorld</h2>
        <HelloWorld />

        <h2>Counter</h2>
        <Counter />
      </div>
    );
  }
}

export default App;