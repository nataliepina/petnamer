import React from 'react'

const endpoint = 'http://localhost:9000/api/greetings'

interface IGreetingProps {}

interface IGreetingState {
  greeting: string
}

class Greeting extends React.Component<IGreetingProps, IGreetingState> {
  constructor(props: any) {
    super(props)

    this.state = {
      greeting: '',
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(endpoint)
      const {greeting} = await response.json() // wait to parse json
      this.setState({greeting})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <>
        <div className="speech-bubble">
          <h5 className="speech-bubble-text">{this.state.greeting}</h5>
        </div>
      </>
    )
  }
}

export default Greeting
