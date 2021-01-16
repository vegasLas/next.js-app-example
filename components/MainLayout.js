import React from 'react'
import Head from 'next/head'
import cn from 'classnames'
import { useRouter } from 'next/router'
import NavLink from './NavLink'
import { useSelector } from 'react-redux'
import Detailded from './Detailed'
import { getSelectedUserSel } from '../store/selectors/users-selectors'
const MainLayout = React.memo(({ children }) => {
    const selectUser = useSelector(getSelectedUserSel)
    const router = useRouter()
    const { asPath } = router;
    let detailed;
    if (asPath === "/posts" && !selectUser) {
        detailed = null
    } else detailed = <Detailded selectUser={selectUser} />
    return (
        <div className={"container"}>
            <Head>
                <title>MEDIA WORKS</title>
                <meta name="keywords" content="users" />
                <meta name="description" content="Come to me" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"container-main"}>
                <nav className={"container-main__navbar"}>
                    <NavLink href="/users">
                        <a className={cn(asPath === "/users" && "navbar-link__active", "navbar-link")}>
                            Пользователи
                        </a>
                    </NavLink>
                    <NavLink href="/posts">
                        <a className={cn(asPath === "/posts" && "navbar-link__active", "navbar-link")}>
                            Посты
                        </a>
                    </NavLink>
                </nav>
                <div className={"container-main__body"}>
                        {children}
                </div>
                {detailed}
            </main>
        </div >
    )
})
export default MainLayout