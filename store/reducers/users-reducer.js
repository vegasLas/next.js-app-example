import { usersAPI } from "../../api/UsersAPI"

const SET_USERS = "SET_USERS"
const SET_SELECT_USER = "SET_SELECT_USER"
const DOWNLOAD_USERS = "DOWNLOAD_USERS"
const initialState = {
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_SELECT_USER:
            return {
                ...state,
                selectUser: action.selectUser
            }
        case DOWNLOAD_USERS:
            return {
                ...state,
                stateDownload: action.stateDownload
            }
        default: return state
    }
}
export const actions = {
    setUsers: (users) => ({
        type: SET_USERS,
        users
    }),
    setSelectUser: (selectUser) => ({
        type: SET_SELECT_USER,
        selectUser
    }),
    setStateDownload: () => ({ 
        type: DOWNLOAD_USERS,
        stateDownload
    })
}

export const getUsers = () => async (dispatch) => {
    let data = await usersAPI.getUsers()
    dispatch(actions.setUsers(data))
}
export default usersReducer