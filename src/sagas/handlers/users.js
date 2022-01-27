import { call, put } from "redux-saga/effects";
import { setUsers } from "../../redux/actions";
import requestGetUsers from '../requests/users'

export function* handleGetUser(){

    try{
        const users = yield call(requestGetUsers)
        yield put(setUsers(users))
    }catch (error){
        console.log(error)
    }
}