import MainLayout from "../components/MainLayout";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getComments } from "../store/reducers/post-reducer";
import { getPostsSel, getSelectedUserPosts, getCommentsSel } from "../store/selectors/posts-selectors";
import SimpleBar from "simplebar-react";

const Comment = ({ name, body }) => {
    return (
        <div className={"comment"}>
            <div className={'comment__name'}>
                {name}

            </div>
            <div className={'comment__body'}>
                {body}
            </div >
        </div >
    )
}

const Post = ({ id, title, body }) => {
    const [state, setState] = useState(false)
    const comments = useSelector(getCommentsSel)
    const dispatch = useDispatch()
    const handleClick = () => {
        !state ? setState(true) : setState(false)
        dispatch(getComments(id))
    }
    debugger
    let commentsFiltered = comments.filter(o => o.postId === id)
    return (
        <div className={"post"}>
            <h3 className={'post__h3'}>{title} </h3>
            <div className={'post__body'}>
                {body}
            </div>
            <button onClick={handleClick} className={'post__button'}>
                {!state ? "Открыть комментарии" : "Скрыть комментарии"}
            </button>
            <div className={"post__comments"}>
                {state && comments && commentsFiltered
                    .map(c => <Comment name={c.name} body={c.body} />)}
            </div>
        </div>
    )
}

const Posts = React.memo(() => {
    const dispatch = useDispatch();
    const posts = useSelector(getPostsSel)
    const postsSel = useSelector(getSelectedUserPosts)
    let listPosts;
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (!postsSel && posts) {
        listPosts = posts.splice(0, 20).map(p => <Post id={p.id} title={p.title} body={p.body} />)
    } else if (postsSel)
        listPosts = postsSel.map(p => <Post title={p.title} body={p.body} />)
    return (
        <MainLayout>
            <div className={"posts"}>
                <h2 className={'posts__h2'}>
                    Посты
                </h2>
                <div className={'posts__body'}>
                    {listPosts}
                </div>
            </div>

        </MainLayout>
    )
})
export default Posts