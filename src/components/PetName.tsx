import React from 'react'
import logo from '../logo.svg'
import Greeting from './Greeting'
import RandomName from './RandomName'

const PetName = (props: any) => {
  return (
    <div className="pet-name">
      <h2 className="pet-name-header">{props.children}</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <Greeting />
      <RandomName />
    </div>
  )
}

export default PetName
