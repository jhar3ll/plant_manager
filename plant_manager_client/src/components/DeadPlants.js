import React from 'react'
import { connect } from 'react-redux'   
import Emoji from './Emoji'


const DeadPlants = ({ plants }) => {

    const dead_plants = plants.filter(plant => plant.deprived_count > 1)
   
    return (
        <div>
            <h1>  Here is are the plants that are no longer with us:</h1>
           <h2>
            <ul>
            {dead_plants.map(p => <li> {p.name} plant <Emoji symbol='🥀'/>  </li>)}
            </ul>
            </h2>
        </div>
    )
}

const mapStateToProps = state => {
    return { plants: state.plants}
}

export default connect(mapStateToProps)(DeadPlants)