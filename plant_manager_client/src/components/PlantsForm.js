import React, { Component } from 'react'
import { addPlant } from '../actions/plantsActions'
import { connect } from 'react-redux'

class PlantsForm extends Component {

    state = {
        name: '',
        home_date: '',
        water_frequency: '',
        health: '',
        deprived_count: 0
    }
   

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    

    handleSubmit = event => {
        event.preventDefault()
        this.props.addPlant(this.state)
    }

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label>Name:</label>
               <input type='text' placeholder='plant name' value={this.state.name} onChange={this.handleChange} name='name'/>
               <br />

               <label>Brought Home:</label>
               <input type='date' value={this.state.home_date} onChange={this.handleChange} name='home_date' />
               <br />

               <label>Water Frequency:</label>
               <input type='text' placeholder='times per day' value={this.state.water_frequency} onChange={this.handleChange} name='water_frequency'/>
               <br />

               <input type='submit' value='Add Plant'/>
           </form>
        )
    }
}

export default connect(null, { addPlant })(PlantsForm)

