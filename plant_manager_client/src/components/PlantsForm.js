import React, { Component } from 'react'
import { addPlant } from '../actions/plantsActions'
import { connect } from 'react-redux'

class PlantsForm extends Component {

    state = {
        name: '',
        home_date: '',
        water_frequency: '',
        sun_needed: '',
        health: 'good'
    }
   

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value.toString()
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
               <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
               <br />

               <label>Brought Home:</label>
               <input type='text' value={this.state.home_date} onChange={this.handleChange} name='home_date' />
               <br />

               <label>Water Frequency:</label>
               <input type='text' placeholder='times per day' value={this.state.water_frequency} onChange={this.handleChange} name='water_frequency'/>
               <br />

               <label> Sun Needed:</label>
               <input type='text' placeholder='hours of sun' value={this.state.sun_needed} onChange={this.handleChange} name='sun_needed'/>
               <br />

               <input type='hidden' value={this.state.health} onChange={this.handleChange} name='health'/>
               <br />

             
               <input type='submit' value='Create Plant'/>
           </form>
        )
    }
}

export default connect(null, { addPlant })(PlantsForm)

