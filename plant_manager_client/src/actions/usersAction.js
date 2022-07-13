export const fetchUser = (user_id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${user_id}`)
        .then(resp => resp.json())
        .then(user => dispatch({ type: 'FETCH_USER', payload: user}))
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