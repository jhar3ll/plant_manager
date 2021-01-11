import React, { Component } from 'react'

export default class Countdown extends Component {

    state = {
        hours: 0,
        minutes: 5,
        seconds: 10
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { hours, minutes, seconds } = this.state

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
                clearInterval(this.myInterval) 
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { hours, minutes, seconds } = this.state
        return (
            <div>
                { 
                     <h1>Time Remaining: {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}