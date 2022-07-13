import React, { Component } from 'react'
import { addUser } from '../actions/usersAction'
import { connect } from 'react-redux'

class UsersForm extends Component {

    state = {
        username: '',
        password: ''
    }
   

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    

    handleSubmit = event => {
        event.preventDefault()
        this.props.addUser(this.state)
    }

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label>Username:</label>
               <input type='text'  value={this.state.username} onChange={this.handleChange} name='username'/>
               <br />

               <label>Password:</label>
               <input type='password' value={this.state.password} onChange={this.handleChange} name='password' />
               <br />

               <input type='submit' value='Add User'/>
           </form>
        )
    }
}

export default connect(null, { addUser })(UsersForm)

