import * as actions from '../actions'
const initialState = []

export default function postCommentsReducer(state=initialState, action) {
    switch (action.type) {
        case actions.SET_POST_COMMENTS:
            return action.payload
        default:
            return state
    }
}