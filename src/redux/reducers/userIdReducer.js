import * as actions from '../actions'
const initialState = 0

export default function userIdReducer(state = initialState, action){

    switch(action.type){
        case actions.SET_USER_ID:
            return action.payload
        
        default:
            return state
    }

}