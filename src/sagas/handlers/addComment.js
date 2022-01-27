import { call, put, select } from "redux-saga/effects";
import requestAddComment from '../requests/addComment'

const getuid = state => state.userIdReducer
const getpid = state => state.postIdReducer
const getcdetail = state => state.commentDetailReducer

export function* handleAddComment(){
    try{
        const uid = yield select(getuid)
        const pid = yield select(getpid)
        const cdetail = yield select(getcdetail)
        yield call(requestAddComment, uid, pid, cdetail)
    }catch (error){
        console.log(error)
    }
}