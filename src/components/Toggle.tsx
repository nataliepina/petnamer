import React from 'react'

interface IToggleProps {
  isToggleOn: boolean
  handleClick: () => void
}

const Toggle = ({isToggleOn, handleClick}: IToggleProps) => {
  return (
    <>
      <div className="toggle-container">
        <button className="btn btn-add-name" onClick={handleClick}>
          {isToggleOn ? 'x' : '+ Add A Name'}
        </button>
      </div>
    </>
  )
}

export default Toggle
