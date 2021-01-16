import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../components/MainLayout'
import { getSeletUserPosts } from '../store/reducers/post-reducer'
import { actions, getUsers } from '../store/reducers/users-reducer'
import { getUsersSel } from '../store/selectors/users-selectors'

const User = ({ user }) => {
    debugger
    const { address, id, name, } = user
    const dispatch = useDispatch();
    const router = useRouter();
    const selectuser = () => {
        dispatch(actions.setSelectUser(user))
    }
    const watchPostsSelectedUser = () => {
        dispatch(getSeletUserPosts(id))
        selectuser()
        router.push("/posts")
    }
    return (
        <div className={"user"}>
            <button onClick={selectuser} className={'user__name'}>
                {name}
            </button>
            <p className={'user__city'}>
                {address.city}
            </p>
            <button onClick={watchPostsSelectedUser} className={'user__button'} >
                Смотреть посты
            </button>
        </div>
    )
}

const Users = React.memo(() => {
    const dispatch = useDispatch()
    const users = useSelector(getUsersSel)
    let usersList = []
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    if (!users) {
        usersList = <div>Загрузка...</div>
    } else if (users.length === 0) {
        usersList = <div>Пользователи не найдены</div>
    } else if (users.length > 0) {
        usersList = users.map((u, index) => <User key={index} user={u} />
        )
    }
    return (
        <MainLayout>
            <div className={"users"}>
                <h2 className={'users__h2'}>Пользователи</h2>
                <div className={'users__body'}>
                    {usersList}
                </div>
            </div >
        </MainLayout >
    )
}
)
export default Users