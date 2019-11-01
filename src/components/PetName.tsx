import React from 'react'
import logo from '../logo.svg'
import Greeting from './Greeting'

const PetName = (props: any) => {
  return (
    <div className="pet-name">
      <h2 className="pet-name-header">{props.children}</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <Greeting />
    </div>
  )
}

export default PetName
