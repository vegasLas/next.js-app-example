const SET_POSTS = "SET_POSTS"
const SET_COMMENTS = "SET_COMMENTS"
const SELECT_USER_POST = "SELECT_USER_POST"
import { postsApi } from "../../api/postsAPI"
const initialState = {
    comments: []
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: [...state.comments].concat(action.comments)
            }

        case SELECT_USER_POST: {
            return {
                ...state,
                selectUserPosts: action.selectUserPosts
            }
        }
        default:
            return state
    }
}
export const actions = {
    setPosts: (posts) => ({
        type: SET_POSTS,
        posts
    }),
    setComments: (comments) => ({
        type: SET_COMMENTS,
        comments
    }),
    setSelectUserPost: (selectUserPosts) => ({
        type: SELECT_USER_POST,
        selectUserPosts
    })

}

export const getPosts = () => async (dispatch) => {
    let data = await postsApi.getPosts()
    dispatch(actions.setPosts(data))
}
export const getSeletUserPosts = (id) => async (dispatch) => {
    let data = await postsApi.getPostsForSelectUser(id)
    dispatch(actions.setSelectUserPost(data))
}
export const getComments = (id) => async (dispatch) => {
    let data = await postsApi.getComments(id)
    dispatch(actions.setComments(data))
}
export default postsReducer