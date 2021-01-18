import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantsActions'

class PlantsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchPlants()
    }
   
    render() {
        return (
            <div></div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPlants: () => dispatch(fetchPlants())
})

const mapStateToProps = state => {
    return { plants: state.plants}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer)