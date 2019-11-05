import React from 'react'

export interface IButtonLoaderProps {
  loading?: boolean
  onClick: () => void
}

export interface IButtonLoaderProps {}

const ButtonLoader = ({loading, onClick}: IButtonLoaderProps) => {
  return (
    <div>
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <div>User Submitted List</div>
          )}
        </button>
      </div>
    </div>
  )
}

export default ButtonLoader
