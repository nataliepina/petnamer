import React from 'react'

export interface ISearchProps {
  padding?: string
}

interface ISearchState {
  onFormSubmit: () => void
  term: string
  onSubmit: () => void
}

class SearchBar extends React.Component<ISearchProps, ISearchState> {
  state = {
    term: '',
    onFormSubmit: () => {},
    onInputChange: () => {},
  }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onFormSubmit(term)
  }

  render() {
    return (
      <div>
        <form onSubmit={null}>
          <div>
            <label></label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
