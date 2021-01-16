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
            let commentsCopy = [...state.comments]
            let commentsCopy2 = action.comments
            let s = false;
            s = commentsCopy.some(o => o.postId === commentsCopy2[0].postId)
            if (s) commentsCopy2 = []
            return {
                ...state,
                comments: [...state.comments].concat(commentsCopy2)
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