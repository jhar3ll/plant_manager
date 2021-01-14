import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantsActions'
import { plantStruggling } from '../actions/plantsActions'
import { plantDead } from '../actions/plantsActions'


class PlantsContainer extends Component {


    componentDidMount() {
        this.props.fetchPlants()

        
        if (this.props.plants.deprived_count === 1){
            this.setState(({ health }) => ({
                health: 'struggling'
            }))
        }
    }
   

    render() {
        return (
            <div></div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPlants: () => dispatch(fetchPlants()),
    plantStruggling: () => dispatch(plantStruggling()),
    plantDead: () => dispatch(plantDead()), 
})

const mapStateToProps = state => {
    return { plants: state.plants}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer)