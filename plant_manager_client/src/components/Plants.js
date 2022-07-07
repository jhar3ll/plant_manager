import React from 'react'
import { connect } from 'react-redux'
import Countdown from './Countdown';    
import Emoji from './Emoji'


const Plants = ({ plants }) => {

    const plantStatus = (plant) => {  
        if (plant.deprived_count === 0){
            return '💐'
        } else if (plant.deprived_count === 1){
            return '🌱'
        } else {
            return '🥀'
        }
    }

    const plantTimer = (plant) =>{
        if (plant.deprived_count <= 1){
            return plant
        } else {
            return 1
        }
    }
    // {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}

    return (
        <div>
            {plants.map(plant => 
            <ul>
                <li key={plant.id}>
                    {plant.deprived_count <= 1 ?
                        <h3> {plant.name} brought home on {plant.home_date}. Needs to be watered {plant.water_frequency} times per day. 
                        Plant status: <Emoji symbol={plantStatus(plant)}/> <Countdown plants={plantTimer(plant)}/>
                        </h3>
                        : 
                        <h3> Your {plant.name} plant brought home on {plant.home_date} has died. <Emoji symbol={plantStatus(plant)}/> </h3>
                    }
                </li>
            </ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { plants: state.plants}
}

export default connect(mapStateToProps)(Plants)