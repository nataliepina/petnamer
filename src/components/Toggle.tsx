import React from 'react'

interface ToggleProps {
  isToggleOn: boolean
  handleClick: () => void
}

const Toggle = ({isToggleOn, handleClick}: ToggleProps) => {
  return (
    <>
      <div>{isToggleOn && <p>Add Your Own Creation...</p>}</div>
      <button onClick={handleClick}>{isToggleOn ? 'OFF' : 'ON'}</button>
    </>
  )
}

export default Toggle
