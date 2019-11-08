import React from 'react'
import './App.scss'
import PetName from '../src/components/PetName'
import PetNameList from '../src/components/PetNameList'
import PetPortal from '../src/components/PetPortal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PetName>Cat Name Generator</PetName>
      </header>
      <div className="section">
        <div>
          <PetNameList />
        </div>
        <div>
          <PetPortal />
        </div>
      </div>
    </div>
  )
}

export default App
