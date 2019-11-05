import React from 'react'

import './App.scss'
import PetName from '../src/components/PetName'
import PetNameList from '../src/components/PetNameList'

const COLORS = [
  '#D291BC',
  '#957DAD',
  '#6CB2D1',
  '#202020',
  '#66bbae',
  '#3eb5c1',
  '#ffaaa5',
  '#80d0c7',
]

document.body.style.backgroundColor = '#202020'

document.onclick = () => {
  document.body.style.backgroundColor =
    COLORS[Math.floor(Math.random() * COLORS.length)]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PetName>Cat Name Generator</PetName>
        <div>
          <PetNameList />
        </div>
      </header>
    </div>
  )
}

export default App
