import React from 'react'

const endpoint = 'http://localhost:9000/api/words'

interface INameProps {}

interface INameState {
  name: string
  loading?: boolean
}

interface IButtonProps {
  loading?: boolean
  onClick: () => void
  title?: string
  spinner?: any
}

interface IButtonProps {}

const Spinner = () => {
  return (
    <div>
      <div className="loader center">
        <i className="fas fa-spinner fa-pulse fa-3x fa-fw" />
      </div>
    </div>
  )
}

const ButtonLoader = ({loading, onClick, title, spinner}: IButtonProps) => {
  return (
    <div>
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {loading ? {spinner} : <div>{title}</div>}
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
          <ButtonLoader
            onClick={this.fetchData}
            title={'Randomize'}
            spinner={<Spinner />}
          />
        </div>
      </>
    )
  }
}

export default RandomName
