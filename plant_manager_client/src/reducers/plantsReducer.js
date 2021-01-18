export const plantsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANTS':
            return action.payload
        case 'ADD_PLANT':
            return [...state, action.payload]
        case 'DEPRIVE_PLANT':
            const depIndex = state.findIndex(n => n.id === action.payload.id)
            const depArray = [...state]
            depArray[depIndex].deprived_count += 1
        return depArray
        case 'WATER_PLANT':
            const watIndex = state.findIndex(n => n.id === action.payload.id)
            const watArray = [...state]

            if (action.payload.deprived_count > 0){
            watArray[watIndex].deprived_count -= 1
        return watArray
            } else {
                return state
            }
        default:
            return state
    }
}