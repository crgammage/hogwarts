import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Index from './Index'

class App extends Component {
  state = {
    hogs: [],
    filteredHogs: [],
    greasedHogs: false,
    search: '',
    nameSortedHogs: []
  }

 componentDidMount() {
  fetch('http://localhost:3001/hogs')
  .then(res => res.json())
  .then(data => {
    this.setState( { hogs: data })
  })
 }

greasedHogs = () => {
  let filteredHogs = this.state.hogs.filter(hog => hog.greased === true)
  let originalHogs = this.state.hogs
  if (this.state.greasedHogs === false) {
    if (this.state.search === "name") {
      console.log('success')
      let sortedNameHogs = originalHogs.sort((a, b) => a.name < b.name ? -1 : 1)
      return sortedNameHogs
    } else if (this.state.search === "weight") {
      console.log("success again")
      let sortedWeightHogs = originalHogs.sort((a, b) => a.weight < b.weight ? -1 : 1)
      return sortedWeightHogs
    }
    return originalHogs
  } else if (this.state.greasedHogs === true) {
    return filteredHogs
  }
}

handleFilter = () => {
  this.setState( {greasedHogs: !this.state.greasedHogs} )
}

renderSelectMenu = () => {
  return (
    <select name="e.target.name" onChange={this.setSearch} value={this.state.search}>
          <option>Please Choose an Option</option>
          <option name="name" value="name">Name</option>
          <option name="weight" value="weight">Weight</option>
      </select>
  )
}

setSearch = e => {
  this.setState( {
    search: e.target.value,
  }, () => console.log(this.state.search))
}

sortByName = () => {
  this.setState( { greasedHogs: false} )
  let originalHogs = this.state.hogs
  let sortedHogs = originalHogs.sort()
}

  

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.handleFilter}>Greased Pigs</button>
        {this.renderSelectMenu()}
        <Index hogs={this.greasedHogs()}/>
      </div>
    );
  }
}

export default App;
