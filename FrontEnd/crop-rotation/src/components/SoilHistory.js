import React, { Component } from 'react'
import HistoryList from '../components/HistoryList'

let blankName = { name: '' }
let blankSoil = { id: '', name: '', soilType: '', phLevel: '' }

class SoilHistory extends Component {
    state = {
        soils: { ...blankSoil },
        soilName: { ...blankName },
        history: []
    }

    handleChange = (event) => {
        const soilName = this.state.soilName
        soilName[event.target.name] = event.target.value
        this.setState({ soilName: soilName })
        this.setState({ history: [] })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let soils = this.state.soils.crops
        for (let i = 0; i < soils.length; i++) {
            if (soils[i].name === this.state.soilName.name) {
                let history = this.state.history 
                history.unshift(soils[i])
                this.setState({ history })
            }
        }
    }

    componentDidMount = () => {
        this.getHistory()
    }

    getHistory = () => {
        let url = 'https://crop-rotator.herokuapp.com/soils'
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(soils => this.setState({ soils: soils }))
    }

    render() {
        return <div id="soilhistory">
            <h3>Look up your previous soil samples</h3>
            <form className="soilhistoryform" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.soilName.name} onChange={this.handleChange} />
                <input type="submit" name="submit" value="Submit" />
            </form>
            <HistoryList history={this.state.history} />
        </div>
    }
}

export default SoilHistory