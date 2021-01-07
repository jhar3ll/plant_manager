//fetch all plants from API

export const fetchPlants = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/plants')
        .then(resp => resp.json())
        .then(plants => dispatch({ type: 'FETCH_PLANTS', payload: plants}))
    }
}