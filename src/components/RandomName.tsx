import React from 'react'

const endpoint = 'http://localhost:9000/api/words'

interface INameProps {}

interface INameState {
  name: string
  loading?: boolean
}

export interface IButtonProps {
  loading?: boolean
  onClick: () => void
}

export interface IButtonProps {}

const ButtonLoader = ({loading, onClick}: IButtonProps) => {
  return (
    <div>
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {loading ? (
            <div className="loader">Randomizing...</div>
          ) : (
            <div>Randomize</div>
          )}
        </button>
      </div>
    </div>
  )
}

class RandomName extends React.Component<INameProps, INameState> {
  constructor(props: any) {
    super(props)

    this.state = {
      name: '',
      loading: false,
    }
  }

  fetchData = () => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        try {
          const response = await fetch(endpoint)
          const {name} = await response.json() // wait to parse json
          this.setState({loading: true, name})
        } catch (error) {
          console.error(error)
        }
      },
    )
  }

  render() {
    return (
      <>
        <div className="random-name">
          <p className="random-name-p">My name is...</p>
          <h2 className="random-name-title">{this.state.name}</h2>
          <ButtonLoader onClick={this.fetchData} />
        </div>
      </>
    )
  }
}

export default RandomName
