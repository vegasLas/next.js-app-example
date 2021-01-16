import { useRouter } from "next/router";
import { useDispatch } from "react-redux"
import { getSeletUserPosts } from "../store/reducers/post-reducer";

const Detailded = ({ selectUser }) => {
    let content;
    const router = useRouter()
    const dispatch = useDispatch()
    const { asPath } = router;
    let button;
    const watchPostsSelectedUser = (id) => {
        dispatch(getSeletUserPosts(id))
        router.push("/posts")
    }
    if (asPath !== "/posts" && selectUser)
        button = <button onClick={() => watchPostsSelectedUser(selectUser.id)} className={"detailed_button"} >
            <span>Смотреть посты</span>
        </button >
    else button = null
    if (!selectUser)
        content = <div className={"detailed_plea"}>
            <div className={"detailed_plea-text"}>
                Нажмите на имя пользователя из списка, чтобы получить больше информации о нем
                    </div>
        </div>
    else
        content = <div>
            <div className={"detailed__head"}>
                <div className={"detailed__name"}>

                    <div >
                        {selectUser.name}
                    </div>
                </div>
                <div className={"detailed__email"}>

                    <div >
                        {selectUser.email}
                    </div>
                </div>
            </div>
            <div className={"detailed__information"}>
                <div className={"detailed__about"}>
                    адрес:
                    <div className={"detailed__about-items"}>
                        {selectUser.address.city},
                        {selectUser.address.street}
                    </div>
                </div  >
                <div className={"detailed__about"}>
                    телефон:
                        <div className={"detailed__about-items"}>
                        {selectUser.phone}
                    </div>
                </div>
                <div className={"detailed__about"}>
                    сайт:
                        <div className={"detailed__about-items"}>
                        {selectUser.website}
                    </div>
                </div>
                <div className={"detailed__about"}>
                    название компании:
                        <div className={"detailed__about-items"}>{
                        selectUser.company.name}
                    </div>
                </div>
            </div>
        </div>
    return (
        <div className={"container-main__detailed detailed"}>
            {
                content
            }
            {
                button
            }
        </div>
    )
}
export default Detailded