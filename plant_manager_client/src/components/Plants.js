import React from 'react'
import { connect } from 'react-redux'
import Countdown from './Countdown';    


const Plants = ({ plants, countdown }) => {
    
    return (
        <div>
            {plants.map(plant => <ul>
                <li key={plant.id}>
            {plant.name} brought home on {plant.home_date}.
            Needs to be watered {plant.water_frequency} times per day. Currently {plant.health}!
            <Countdown hours={plant.water_frequency}/>
            </li>
            </ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { plants: state.plants}
}

export default connect(mapStateToProps)(Plants)