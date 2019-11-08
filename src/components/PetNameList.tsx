import React from 'react'
import AddName from './AddName'
import Toggle from './Toggle'
import ButtonLoader from './ButtonLoader'

const ENDPOINT = `${process.env.REACT_APP_SERVICE_URL}/petnames`

interface PetNameListProps {}

interface PetNameListState {
  collection?: Array<string> | any
  isToggleOn: boolean
  loading?: boolean
}

class PetNameList extends React.Component<PetNameListProps, PetNameListState> {
  constructor(props: PetNameListProps) {
    super(props)
    this.state = {
      collection: [],
      isToggleOn: true,
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
          const response = await fetch(ENDPOINT) // wait until we have the data
          const collection = await response.json() // wait to parse json
          console.log(collection)
          this.setState({collection: collection || [], loading: false})
        } catch (error) {
          console.error('Problem fetching initial data', error)
          this.setState({loading: false})
        }
      },
    )
  }

  postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
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
    const newPet = await this.postData(ENDPOINT, {
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
    const list = this.state.collection.map(
      ({id, name}: {id: number; name: string}) => (
        <li className="pet-name-list" key={id}>
          {name}
        </li>
      ),
    )
    return (
      <div>
        {this.state.loading ? null : <ul>{list}</ul>}
        <ButtonLoader loading={this.state.loading} onClick={this.fetchData} />
        <div className="add-name-container">
          {this.state.isToggleOn && <AddName onSubmit={this.handleSubmit} />}
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
