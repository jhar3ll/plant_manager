import React from 'react'
import { connect } from 'react-redux'
import Countdown from './Countdown';    


const Plants = ({ plants }) => {

const allPlants = (p) => {  
        if (p.deprived_count === 0){
            return 'good!'
        } else if (p.deprived_count === 1){
            return 'struggling!'
        } else {
            return 'dead :( '
        }
    }


    return (
        <div>
            {plants.map(plant => <ul>
                <li key={plant.id}>
            <h3>
                {plant.name} brought home on {plant.home_date}. Needs to be watered {plant.water_frequency} times per day. 
                Currently {allPlants(plant)} <Countdown plants={plant}/>
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