import * as actions from '../actions'
const initialState = []

export default function userReducer(state=initialState, action) {
    switch (action.type) {
        case actions.SET_USERS:
            return action.payload
        default:
            return state
    }
}