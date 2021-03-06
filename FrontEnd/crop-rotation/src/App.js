import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import CropForm from './components/CropForm'
import CropsGrown from './components/CropsGrown'
import SoilHistory from './components/SoilHistory'
import UpdateHistory from './components/UpdateHistory'
import DeleteHistory from './components/DeleteHistory'
import Photos from './components/Photos'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { people: [] }
  }

  makePerson = (person) => {
    const { people } = this.state
    people.unshift(person)
    return this.setState({ people })
  }

  sendCrops = (name, crops, location) => {
    let url = 'https://crop-rotator.herokuapp.com/crops'
    if (name === '' || crops === '' || location === '') {
      return 'error'
    } else {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, crops: crops, state: location })
      }).then(response => response.json())
        .then(data => console.log(data))
    }
  }

  sendSample = (name, soilType, phLevel) => {
    let url = 'https://crop-rotator.herokuapp.com/soils'
    if (name === '' || soilType === '' || phLevel === '') {
      return 'error'
    } else {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, soilType: soilType, phLevel: phLevel })
      }).then(response => response.json())
        .then(data => console.log(data))
    }
  }

  findCrops = (crops, soil, ph) => {
    if (soil === 'loam' && ph === 'medium' && crops === 'corn' || soil === 'silt' && ph === 'low' && crops === 'corn' || soil === 'chalk' && ph !== 'high') {
      this.setState({ message: 'You should grow corn in this field.' })
    } else if (soil === 'sand' && ph !== 'high') {
      this.setState({ message: 'You should grow cacti or grass in this field.' })
    } else if (ph === 'high') {
      this.setState({ message: 'Dont grow anything in this field. The PH level needs to be lowered.' })
    } else if (crops === 'wheat' && ph !== 'high') {
      this.setState({ message: 'You should grow wheat in this field.' })
    } else if (soil === 'clay' && ph !== 'high') {
      this.setState({ message: 'You should grow flowers in this field.' })
    } else if (soil === 'loam' && ph === 'low') {
      this.setState({ message: 'You should grow beans in this field.' })
    } else if (soil === 'peat' && ph === 'low') {
      this.setState({ message: 'You should grow cabbage in this field.' })
    } else if (soil === 'silt') {
      this.setState({ message: 'You should grow strawberries in this field' })
    } else {
      this.setState({ message: 'You need to enter your field information.' })
    }

  }

  render() {
    return (
      <div className='App' >
        <Header />
        <Photos />
        <div id='input'>
          <CropForm makePerson={this.makePerson} sendCrops={this.sendCrops} sendSample={this.sendSample} findCrops={this.findCrops} />
          <CropsGrown message={this.state.message} />
          <SoilHistory />
          <UpdateHistory />
          <DeleteHistory />
        </div>
      </div>
    )
  }
}

export default App
