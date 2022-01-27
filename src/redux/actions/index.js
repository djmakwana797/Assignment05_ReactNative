//Type constants 
export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'
export const SET_USER_ID = 'SET_USER_ID'
export const GET_USER_POSTS = 'GET_USER_POSTS'
export const SET_USER_POSTS = 'SET_USER_POSTS'
export const SET_POST_ID = 'SET_POST_ID'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'
export const SET_POST_COMMENTS = 'SET_POST_COMMENTS'
export const SET_COMMENT_DETAIL = 'SET_COMMENT_DETAIL'
export const ADD_COMMENT = 'ADD_COMMENT'

export const getUsers = () => {
    return{
        type: GET_USERS
    }
}

export const setUsers = users => {
    return{
        type: SET_USERS,
        payload: users
    }
}

export const setUserId = id => {
    return{
        type : SET_USER_ID,
        payload : id
    }
}

export const getUserPosts = () => {
    return{
        type: GET_USER_POSTS,
    }
}

export const setUserPosts = posts => {
    return{
        type: SET_USER_POSTS,
        payload: posts
    }
}

export const setPostId = id =>{
    return{
        type: SET_POST_ID,
        payload: id
    }
}

export const getPostComments = () => {
    return{
        type: GET_POST_COMMENTS
    }
}

export const setPostComments = comments => {
    return{
        type: SET_POST_COMMENTS,
        payload: comments
    }
}

export const setCommentDetail = ({name,email,body}) => {
    return{
        type: SET_COMMENT_DETAIL,
        payload: {name,email,body} 
    }
}

export const addComment = () => {
    return{
        type: ADD_COMMENT
    }
}