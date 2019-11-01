import React from 'react'

export interface ISearchProps {
  padding?: string
  onSubmit: (name: string) => void
}

export interface ISearchState {
  name: string
}

class Search extends React.Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props)
    this.state = {
      name: '',
    }
  }
  handleChange = (event: any) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleSubmit = (event: any) => {
    // Prevent button click from submitting form
    event.preventDefault()
    this.props.onSubmit(this.state.name)
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div className="input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Type name here..."
          />
        </form>
      </div>
    )
  }
}

export default Search
