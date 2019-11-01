import React from 'react'

interface IToggleProps {
  isToggleOn: boolean
  handleClick: () => void
}

const Toggle = ({isToggleOn, handleClick}: IToggleProps) => {
  return (
    <>
      <div className="toggle-container">
        <button className="btn" onClick={handleClick}>
          {isToggleOn ? 'x Close' : '+ Add'}
        </button>
      </div>
      {/* <div>{isToggleOn && <p>+</p>}</div> */}
    </>
  )
}

export default Toggle
