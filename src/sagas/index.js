import * as actions from '../redux/actions'
import { all, takeLatest, fork } from "redux-saga/effects";
import { handleGetUser } from "./handlers/users";
import { handleGetUserPost } from "./handlers/userPosts"
import { handleGetPostComment } from "./handlers/postComments"
import { handleAddComment } from "./handlers/addComment"

function* getUserSaga() {
    yield takeLatest(actions.GET_USERS, handleGetUser)
}

function* getPostSaga() {
    yield takeLatest(actions.GET_USER_POSTS, handleGetUserPost)
}

function* getCommentSaga() {
    yield takeLatest(actions.GET_POST_COMMENTS, handleGetPostComment)
}

function* addCommentSaga() {
    yield takeLatest(actions.ADD_COMMENT, handleAddComment)
}

export default function* watcherSaga() {
    yield all([
        fork(getUserSaga),
        fork(getPostSaga),
        fork(getCommentSaga),
        fork(addCommentSaga),
    ])
}


