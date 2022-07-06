export const fetchPlants = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/plants')
        .then(resp => resp.json())
        .then(plants => dispatch({ type: 'FETCH_PLANTS', payload: plants}))
    }
}

export const addPlant = plant => {
    return dispatch => {
        fetch('http://localhost:3000/plants', {
        method: 'POST',
        body: JSON.stringify(plant),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(resp => resp.json())
        .then(plant => dispatch({ type: 'ADD_PLANT', payload: plant}))
    }
    
}

export const deprivePlant = (depPlant) => {
    return {
        type: 'DEPRIVE_PLANT',
        payload: depPlant
    }
}

export const waterPlant = (watPlant) => {
    return {
        type: 'WATER_PLANT',
        payload: watPlant
    }
}

