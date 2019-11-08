import React from 'react'
import usePortal from 'react-useportal'
// import withSecret from '../HOC/HOC'

// const DisplaySecret = (props: any) => <div>The secret is... {props.secret}</div>

// export const WrappedComponent = withSecret(DisplaySecret)

const PetPortal = (props: any) => {
  const {openPortal, closePortal, isOpen, Portal} = usePortal()
  return (
    <>
      <button className="btn" onClick={openPortal}>
        Open Portal
      </button>
      {isOpen && (
        <Portal>
          <div className="portal-container">
            <button className="btn" onClick={closePortal}>
              Close Portal
            </button>
            <div>{/* <WrappedComponent /> */}</div>
          </div>
        </Portal>
      )}
    </>
  )
}

export default PetPortal
