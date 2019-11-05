import React from 'react'

export interface IAddNameProps {
  padding?: string
  onSubmit: (name: string) => void
}

export interface IAddNameState {
  name: string
}

class AddName extends React.Component<IAddNameProps, IAddNameState> {
  constructor(props: IAddNameProps) {
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
        <form className="input-container-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Type name here..."
          />
          <input className="btn btn-submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddName
