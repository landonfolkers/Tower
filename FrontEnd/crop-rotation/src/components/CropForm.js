import React, { Component } from 'react'

let blankPerson = { name: '', crops: '', location: '' }

class CropForm extends Component {
    state = {
        person: { ...blankPerson }
    }

    handleChange = (event) => {
        const person = this.state.person
        person[event.target.name] = event.target.value
        this.setState({ person: person })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.makePerson(this.state.person)
        this.setState({ person: { ...blankPerson } })
        this.props.sendCrops(this.state.person.name, this.state.person.crops, this.state.person.location)
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
                <input type="submit" name="submit" value="Submit" />
            </form>
        </div>
    }
}

export default CropForm