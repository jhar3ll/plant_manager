export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(plants => dispatch({ type: 'FETCH_PLANTS', payload: plants}))
    }
}

export const addUser = user => {
    return dispatch => {
        fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'ADD_USER', payload: user}))
    }
    
}