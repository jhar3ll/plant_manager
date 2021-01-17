export const plantsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PLANTS':
            return action.payload
        case 'ADD_PLANT':
            return [...state, action.payload]
        case 'DEPRIVE_PLANT':
            console.log(action)
        //    const deprivedPlant = state.filter(plant => {
        //        return action.id === plant.id
        //    })
           
            return state
          //  return {...state, plants: (state.plants.deprived_count + 1)}
        default:
            return state
    }
}