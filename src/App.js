import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCrad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterCard value="h" />
        <CharacterCard value="i" />
       
      </div>
    );
  }
}
export default App;

