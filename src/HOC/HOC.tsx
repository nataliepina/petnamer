import React from 'react'

const withSecret = function withSecret(WrappedComponent: any) {
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

export default withSecret
