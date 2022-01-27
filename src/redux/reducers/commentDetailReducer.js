import * as actions from '../actions'
const initialState = {}

export default function commentDetailReducer(state = initialState, action){

    switch(action.type){
        case actions.SET_COMMENT_DETAIL:
            return action.payload
        
        default:
            return state
    }

}