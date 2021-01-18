import React from 'react'
import { connect } from 'react-redux'
import Countdown from './Countdown';    
import Emoji from './Emoji'


const Plants = ({ plants }) => {

    const plantColor = (plant) => {  
        if (plant.deprived_count === 0){
            return '💐'
        } else if (plant.deprived_count === 1){
            return '🌱'
        } else {
            return '🥀'
        }
    }

    return (
        <div>
            {plants.map(plant => <ul>
                <li key={plant.id}>
            <h3> 
                {plant.name} brought home on {plant.home_date}. Needs to be watered {plant.water_frequency} times per day. 
                Plant status: <Emoji symbol={plantColor(plant)}/> <Countdown plants={plant}/>
                </h3>
            </li>
            </ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { plants: state.plants}
}

export default connect(mapStateToProps)(Plants)