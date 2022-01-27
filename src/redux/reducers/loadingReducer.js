import * as actions from '../actions'

const initialState = false

export default function loadingReducer(state = initialState, action){
    switch(action.type){
        case actions.GET_USERS:
            return true
        case actions.SET_USERS:
            return false
        case actions.GET_USER_POSTS:
            return true
        case actions.SET_USER_POSTS:
            return false
        case actions.GET_POST_COMMENTS:
            return true
        case actions.SET_POST_COMMENTS:
            return false
        
        default:
            return state
    }
}