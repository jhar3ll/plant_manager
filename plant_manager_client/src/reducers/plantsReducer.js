export const plantsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANTS':
            return action.payload
        case 'ADD_PLANT':
            return [...state, action.payload]
        case 'PLANT_STRUGGLING':
            return [...state, 
        case 'PLANT_DEAD':
            return state
        default:
            return state
    }
}