import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deprivePlant } from '../actions/plantsActions'

class Countdown extends Component {
    
    state = {
       // hours: (24 / this.props.plants.water_frequency),
        hours: 0,
        minutes: 0,
        seconds: 6,
        text_color: 'green'
    }
   

    componentDidMount() {
        
        this.myInterval = setInterval(() => {
            const { hours, minutes, seconds } = this.state

            if (hours > 4){
                this.setState(({ text_color }) => ({
                    text_color: 'green'
                }))
            } else if (hours < 4 && hours > 2){
                this.setState(({ text_color }) => ({
                    text_color: 'yellow'
                }))
            } else {
                this.setState(({ text_color }) => ({
                    text_color: 'red'
                }))
            }
            

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }

           if ((seconds === 0 && minutes === 0 && hours > 0)){
            this.setState(({ hours }) => ({
                hours: hours - 1,
                seconds: 59,
                minutes: 59
            }))
        } 

            if ((seconds === 0 && minutes > 0 && hours === 0)){
                this.setState(({ minutes }) => ({
                    seconds: 59,
                    minutes: minutes - 1
                }))
            } 

            if ((seconds === 0 && minutes > 0 && hours > 0)){
                this.setState(({ minutes }) => ({
                    seconds: 59,
                    minutes: minutes - 1
                }))
            } 

            if ((seconds === 0 && minutes === 0 && hours === 0)){
                this.props.deprivePlant(this.props.plants)
                clearInterval(this.myInterval) 
            } 
        }, 1000)
    }

    componentWillUnmount() {  
        clearInterval(this.myInterval)
    }

    render() {
        const { hours, minutes, seconds, text_color } = this.state
        return (
            <div>
                {  
                     <h1 style={{color: text_color}}> {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                     
                }
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return { plantsFromState: state.plants}
    
}

const mapDispatchToProps = (dispatch) => {
    return {
    deprivePlant: plant => dispatch(deprivePlant(plant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown)
  