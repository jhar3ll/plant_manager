export const plantsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANTS':
            return action.payload
        case 'ADD_PLANT':
            return [...state, action.payload]
        case 'DEPRIVE_PLANT':
            debugger
            return action.payload
        default:
            return state
    }
}