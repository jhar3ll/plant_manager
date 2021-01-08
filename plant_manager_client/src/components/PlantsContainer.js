import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/plantsActions'
import PlantsForm from './PlantsForm'

class PlantsContainer extends Component {

    componentDidMount() {
        this.props.fetchPlants()
    }

    render() {
        return (
            <div>
                Plants Container
                <PlantsForm />
            </div>
        )
    }
}

export default connect(null, { fetchPlants })(PlantsContainer)