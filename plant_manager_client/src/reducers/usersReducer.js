export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_USER':
            const user_id = state.findIndex(n => n.id === action.payload.id)
            return action.payload
        case 'ADD_USER':
            return [...state, action.payload]
        default:
            return state
    }
}

