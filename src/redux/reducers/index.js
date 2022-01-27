import { combineReducers } from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import userPostsReducer from './userPostsReducer'
import userIdReducer from './userIdReducer'
import postIdReducer from './postIdReducer'
import postCommentsReducer from './postCommentsReducer'
import commentDetailReducer from './commentDetailReducer'

const rootReducer = combineReducers({
    userReducer,
    userIdReducer,
    loadingReducer,
    userPostsReducer,
    postIdReducer,
    postCommentsReducer,
    commentDetailReducer
})

export default rootReducer