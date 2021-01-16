import { instance } from './api'

export const postsApi = {
    getPosts() {
        return instance.get(`posts`).then(res => res.data);
    },
    getPostsForSelectUser(selectUserId) {
        return instance.get(`posts?userId=${selectUserId}`).then(res => res.data);
    },
    getComments(selectPostId) {
        return instance.get(`comments?postId=${selectPostId}`).then(res => res.data);
    }
}