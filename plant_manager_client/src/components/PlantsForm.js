import React, { Component } from 'react'
import { addPlant } from '../actions/plantsActions'
import { connect } from 'react-redux'

class PlantsForm extends Component {

    state = {
        name: '',
        home_date: '',
        water_frequency: '',
        sun_needed: '',
        alive: true
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
               <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
               <br />
               <label>When did you bring it home?</label>
               <input type='date' value={this.state.home_date} onChange={this.handleChange} name='home_date'/>
               <br />
               <label>How often to water?</label>
               <select defaultValue="">
                   <option hidden value=""></option>
                   <option value={this.state.water_frequency} onChange={this.handleChange} name='water_frequency'>1x per day</option>
                   <option value={this.state.water_frequency} onChange={this.handleChange} name='water_frequency'>2x per day</option>
                   <option value={this.state.water_frequency} onChange={this.handleChange} name='water_frequency'>3x per day</option>
                   <option value={this.state.water_frequency} onChange={this.handleChange} name='water_frequency'>4x per day</option>
              </select>
               <br />
               <label>How much sun is needed per day?</label>
               <select defaultValue="">
                   <option hidden value=""></option>
                   <option value={this.state.sun_needed} onChange={this.handleChange} name='sun_needed'>1 hour</option>
                   <option value={this.state.sun_needed} onChange={this.handleChange} name='sun_needed'>2 hours</option>
                   <option value={this.state.sun_needed} onChange={this.handleChange} name='sun_needed'>4 hours</option>
                   <option value={this.state.sun_needed} onChange={this.handleChange} name='sun_needed'>6 hours</option>
              </select>
               <br />
               <label>Is it alive? </label>
               <select defaultValue="">
                   <option hidden value=""></option>
                   <option value={this.state.alive} onChange={this.handleChange} name='alive'>For now</option>
                   <option value={this.state.alive} onChange={this.handleChange} name='alive'>No :( </option>
              </select>
               <br />
               <input type='submit' value='Create Plant'/>
           </form>
        )
    }
}

export default connect(null, { addPlant })(PlantsForm)
