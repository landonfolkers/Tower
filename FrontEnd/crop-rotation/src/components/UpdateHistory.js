import React, { Component } from 'react'

class UpdateHistory extends Component {
    state = {
        ID: {
            ID: '',
            name: '',
            soilType: '',
            phLevel: ''
        }
    }

    updateHistory = (event) => {
        const number = parseInt(this.state.ID.ID, 10)
        const url = 'http://localhost:5000/soils/' + this.state.ID.ID
        fetch(url, {
            method: 'PUT',
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                id: number,
                name: this.state.ID.name,
                soilType: this.state.ID.soilType,
                phLevel: this.state.ID.phLevel
            })
        }).then(response => response.json())
            .catch(function (error) {
                console.log(error.message)
            })
    }

    handleChange = (event) => {
        const identity = this.state.ID
        identity[event.target.name] = event.target.value
        this.setState({ ID: identity })
        console.log(this.state)
    }


    render() {
        return <div id="updateHistory">
            <h3>Update your previous soil samples</h3>
            <form className="updateHistoryform" onSubmit={this.updateHistory}>
                <label htmlFor="ID">ID</label>
                <input type="number" name="ID" value={this.state.ID.ID} onChange={this.handleChange} />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.ID.name} onChange={this.handleChange} />
                <select name="soilType" value={this.state.ID.soilType} onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="clay">Clay</option>
                    <option value="loam">Loam</option>
                    <option value="silt">Silt</option>
                    <option value="peat">Peat</option>
                    <option value="sand">Sand</option>
                    <option value="chalk">Chalk</option>
                </select>
                <label htmlFor="phLevel">PH Level</label>
                <select name="phLevel" value={this.state.ID.phLevel} onChange={this.handleChange}>
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

export default UpdateHistory