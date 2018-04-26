import React, { Component } from 'react'

let blankPerson = { name: '', crops: '', location: '' }
let blankSample = { name: '', soilType: '', phLevel: '' }

class CropForm extends Component {
    state = {
        person: { ...blankPerson },
        sample: { ...blankSample }
    }

    handleChange = (event) => {
        const person = this.state.person
        const sample = this.state.sample
        person[event.target.name] = event.target.value
        sample[event.target.name] = event.target.value
        this.setState({ person: person })
        this.setState({ sample: sample })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.makePerson(this.state.person)
        this.setState({ person: { ...blankPerson } })
        this.props.sendCrops(this.state.person.name, this.state.person.crops, this.state.person.location)
        this.props.sendSample(this.state.person.name, this.state.sample.soilType, this.state.sample.phLevel)
        this.props.findCrops(this.state.person.crops, this.state.sample.soilType, this.state.sample.phLevel)
    }

    render() {
        return <div className="cropform">
            <form className="crop-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.person.name} onChange={this.handleChange} />
                <label htmlFor="crops">Crops</label>
                <input type="text" name="crops" value={this.state.person.crops} onChange={this.handleChange} />
                <label htmlFor="location">Location (State)</label>
                <input type="text" name="location" value={this.state.person.location} onChange={this.handleChange} />
                <label htmlFor="soilType">Soil Type</label>
                <select name="soilType" value={this.state.sample.soilType} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="clay">Clay</option>
                    <option value="loam">Loam</option>
                    <option value="silt">Silt</option>
                    <option value="peat">Peat</option>
                    <option value="sand">Sand</option>
                    <option value="chalk">Chalk</option>
                </select>
                <label htmlFor="phLevel">PH Level</label>
                <select name="phLevel" value={this.state.sample.phLevel} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input type="submit" name="submit" value="Submit" />
            </form>
        </div>
    }
}

export default CropForm