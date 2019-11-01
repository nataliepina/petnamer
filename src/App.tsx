import React from 'react'

import './App.scss'
import PetName from '../src/components/PetName'
import PetNameList from '../src/components/PetNameList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PetName>Kitty Namer</PetName>
        <div>
          <PetNameList />
        </div>
      </header>
    </div>
  )
}

export default App
