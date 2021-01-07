export const plantsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANTS':
            return action.payload
        default:
            return state
    }
}