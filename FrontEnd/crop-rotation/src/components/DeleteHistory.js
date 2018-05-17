import React, { Component } from 'react'

class DeleteHistory extends Component {
    state = {
        ID: {
            ID: '',
            name: '',
            soilType: '',
            phLevel: ''
        }
    }

    deleteHistory = (event) => {
        const number = parseInt(this.state.ID.ID, 10)
        const url = 'http://localhost:5000/soils/' + this.state.ID.ID
        fetch(url, {
            method: 'DELETE',
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
            <h3>Delete your previous soil samples</h3>
            <form className="updateHistoryform" onSubmit={this.deleteHistory}>
                <label htmlFor="ID">Sample ID</label>
                <input type="number" name="ID" value={this.state.ID.ID} onChange={this.handleChange} />
                <input type="submit" name="submit" value="Submit" />
            </form>
        </div>
    }
}

export default DeleteHistory