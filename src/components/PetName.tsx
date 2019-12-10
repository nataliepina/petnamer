import React from 'react'
import logo from '../assets/logo.svg'
import Greeting from './Greeting'
import RandomName from './RandomName'

const PetName = (props: any) => {
  return (
    <div className="pet-name">
      <h2 className="pet-name-header">{props.children}</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <Greeting />
      <RandomName />
      <div className="font-awesome-paw">
        <i className="fas fa-paw faa-pulse animated fa-5x" />
      </div>
    </div>
  )
}

export default PetName
