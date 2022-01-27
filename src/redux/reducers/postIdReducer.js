import * as actions from '../actions'
const initialState = 0

export default function postIdReducer(state = initialState, action){

    switch(action.type){
        case actions.SET_POST_ID:
            return action.payload
        
        default:
            return state
    }
}