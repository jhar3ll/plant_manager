import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deprivePlant } from '../actions/plantsActions'
import { waterPlant } from '../actions/plantsActions'
import Emoji from './Emoji'

class Countdown extends Component {
    
    state = {
        hours: (24 / this.props.plants.water_frequency),
        minutes: 0,
        seconds: 0,
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
    
    handleClick = () => {
        this.props.waterPlant(this.props.plants)
        this.setState(({ hours, minutes, seconds }) => ({
            hours: (24 / this.props.plants.water_frequency),
            minutes: 0,
            seconds: 0
        }))
    }

    render() {
        const { hours, minutes, seconds, text_color } = this.state
        return (
            <div>
                {  
                     <h3 style={{color: text_color}}> 
                     <button className='waterPlant' onClick={this.handleClick}> <Emoji symbol='water 💦 '/> </button> {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                     </h3>
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
    deprivePlant: depPlant => dispatch(deprivePlant(depPlant)),
    waterPlant: watPlant => dispatch(waterPlant(watPlant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countdown)