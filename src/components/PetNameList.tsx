import React from 'react'
import Search from './Search'

interface PetNameListProps {

}

interface PetNameListState {
  collection?: Array<string> | any
}

class PetNameList extends React.Component<PetNameListProps, PetNameListState> {
  constructor(props: any){
    super(props)
    this.state = {
    collection: ["Snowball", "Ruby", "Bojangles", "Mittens", "Scratch", "Waffles"]
    }
  }

    handleSubmit = (name: any) => {
      this.setState({
      collection: [...this.state.collection, name]
    })
  }

  render(){
    let list = this.state.collection.map((name: any) => <li>{name}</li>)
    return(
    <div>
      <ul>
        {list}
      </ul>
      <h5>
        Add A Kitty Name: <Search onSubmit={this.handleSubmit}/>
      </h5>
    </div>
    )
  }
}

export default PetNameList
