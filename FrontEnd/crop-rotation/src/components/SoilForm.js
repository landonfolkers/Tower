import React, { Component } from 'react'

let blankSample = { name: '', soilType: '', phLevel: '' }

class SoilForm extends Component {
    state = {
        sample: { ...blankSample }
    }

    handleChange = (event) => {
        const sample = this.state.sample
        sample[event.target.name] = event.target.value
        this.setState({ sample: sample })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.makeSample(this.state.sample)
        this.setState({ sample: { ...blankSample } })
        this.props.sendSample(this.state.sample.name, this.state.sample.soilType, this.state.sample.phLevel)
    }

    render() {
        return <div className="soilform">
            <form className="soil-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.sample.name} onChange={this.handleChange} />
                <label htmlFor="soilType">Soil Type</label>
                <input type="text" name="soilType" value={this.state.sample.soilType} onChange={this.handleChange} />
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

export default SoilForm