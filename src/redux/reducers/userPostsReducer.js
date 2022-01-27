import * as actions from '../actions'
const initialState = []

export default function userPostsReducer(state=initialState, action) {
    switch (action.type) {
        case actions.SET_USER_POSTS:
            return action.payload
        default:
            return state
    }
}