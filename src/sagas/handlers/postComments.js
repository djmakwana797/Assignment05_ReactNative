import { call, put, select } from "redux-saga/effects";
import { setPostComments } from "../../redux/actions";
import requestGetComments from '../requests/postComments'

const postId = state => state.postIdReducer

export function* handleGetPostComment(){
    try{
        const pid = yield select(postId)
        const comments = yield call(requestGetComments, pid)
        yield put(setPostComments(comments))
    }catch (error){
        console.log(error)
    }
}