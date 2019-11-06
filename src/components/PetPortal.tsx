import React from 'react'
import usePortal from 'react-useportal'

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
          </div>
        </Portal>
      )}
    </>
  )
}

export default PetPortal
