import React from 'react'
import Search from './Search'
import Toggle from './Toggle'

interface PetNameListProps {}

interface PetNameListState {
  collection?: Array<string> | any
  isToggleOn: boolean
}

class PetNameList extends React.Component<PetNameListProps, PetNameListState> {
  constructor(props: PetNameListProps) {
    super(props)
    this.state = {
      collection: [],
      isToggleOn: true,
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:9000/api/petnames') // wait until we have the data
      const collection = await response.json() // wait to parse json
      this.setState({collection})
    } catch (error) {
      console.error(error)
    }
  }

  postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data),
    })
    return await response.json() // parses JSON response into native JS objects
  }

  handleSubmit = async (name: string) => {
    const newPet = await this.postData('http://localhost:9000/api/petnames', {
      name: name,
    })
    this.setState({
      collection: [...this.state.collection, newPet],
    })
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    let list = this.state.collection.map(
      ({id, name}: {id: number; name: string}) => <li key={id}>{name}</li>,
    )
    return (
      <div>
        <ul>{list}</ul>
        {this.state.isToggleOn && <Search onSubmit={this.handleSubmit} />}
        <div>
          <Toggle
            isToggleOn={this.state.isToggleOn}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default PetNameList
