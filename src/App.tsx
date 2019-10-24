import React from 'react'
import logo from './logo.svg'
import './App.css'
import PetName from '../src/components/PetName'
import PetNameList from '../src/components/PetNameList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <PetName>Kitty Namer</PetName>
          <PetNameList />
        </div>
      </header>
    </div>
  );
}

export default App;
