import { call, put, select } from "redux-saga/effects";
import { setUserPosts } from "../../redux/actions";
import requestGetPosts from '../requests/userPosts'

const userId = state => state.userIdReducer

export function* handleGetUserPost(){

    try{
        const id = yield select(userId)
        const posts = yield call(requestGetPosts, id)
        yield put(setUserPosts(posts))
    }catch (error){
        console.log(error)
    }
}