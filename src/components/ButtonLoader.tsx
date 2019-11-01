import React from 'react'

export interface ISearchProps {
  loading?: boolean
  onClick: () => void
}

export interface ISearchState {}

const ButtonLoader = ({loading, onClick}: ISearchProps) => {
  return (
    <div>
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <div>Generate</div>
          )}
        </button>
      </div>
    </div>
  )
}

export default ButtonLoader
