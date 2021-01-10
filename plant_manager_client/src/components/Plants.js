import React from 'react'
import { connect } from 'react-redux'


const Plants = ({ plants }) => {
    return (
        <div>
            {plants.map(plant => <ul>
                <li key={plant.id}>
            {plant.name} brought home on {plant.home_date} and is {plant.health}! 
            watered {plant.water_frequency}, needs {plant.sun_needed} of sun each day.
            </li>
            </ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return { plants: state.plants}
}

export default connect(mapStateToProps)(Plants)