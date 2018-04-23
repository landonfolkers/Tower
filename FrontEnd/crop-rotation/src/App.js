import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import CropForm from './components/CropForm'
import SoilForm from './components/SoilForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { people: [], samples: [] }
  }

  makePerson = (person) => {
    const { people } = this.state
    people.unshift(person)
    return this.setState({ people })
  }

  makeSample = (sample) => {
    const { samples } = this.state
    samples.unshift(sample)
    return this.setState({ samples })
  }

  sendCrops = (name, crops, location) => {
    console.log(crops)
    let url = 'http://localhost:3000/crops'
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, crops:crops, state:location})
    }).then(response => response.json())
      .then(data => console.log(data))
  }

  sendSample = (name, soilType, phLevel) => {
    let url = 'http://localhost:3000/soils'
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, soilType:soilType, phLevel:phLevel})
    }).then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id='input'>
          <CropForm makePerson={this.makePerson} sendCrops={this.sendCrops} />
          <SoilForm makeSample={this.makeSample} sendSample={this.sendSample} />
        </div>
      </div>
    )
  }
}

export default App
