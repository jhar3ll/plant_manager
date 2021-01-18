export const plantsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANTS':
            return action.payload
        case 'ADD_PLANT':
            return [...state, action.payload]
        case 'DEPRIVE_PLANT':
            const index = state.findIndex(n => n.id === action.payload.id)
            const newArray = [...state]
            newArray[index].deprived_count += 1
        return newArray
        
        default:
            return state
    }
}