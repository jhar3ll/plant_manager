import React, { Component } from 'react'

class PlantsForm extends Component {

    state = {
        name: '',
        home_date: '',
        water_frequency: '',
        sun_needed: '',
        alive: 'yes'
    }

    render() {
        return (
           <form>
               <label>Name:</label>
               <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
               <br />
               <label>When did you bring it home?</label>
               <input type='datetime-local' value={this.state.home_date} onChange={this.handleChange} name='home_date'/>
               <br />
               <label>How often to water?</label>
               <input type='text' value={this.state.water_frequency} onChange={this.handleChange} name='water_frequency'/>
               <br />
               <label>How much sun is needed?</label>
               <input type='text' value={this.state.sun_needed} onChange={this.handleChange} name='sun_needed'/>
               <br />
               <label>Is it alive? </label>
               <select> 
                   <option value={this.state.alive} onChange={this.handleChange} name='alive'>{this.state.alive} </option>
              </select>
               <br />
               <input type='submit' value='Create Plant'/>
           </form>
        )
    }
}

export default PlantsForm
