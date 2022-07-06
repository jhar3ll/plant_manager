import { combineReducers } from 'redux'
import { plantsReducer } from './plantsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    plants: plantsReducer, 
})

