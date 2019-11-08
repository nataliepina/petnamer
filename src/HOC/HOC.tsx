import React from 'react'

export default function withSecret(WrappedComponent: any) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <WrappedComponent
            {...this.props}
            secret={'Welcome to my secret portal!'}
          />
        </div>
      )
    }
  }
}
