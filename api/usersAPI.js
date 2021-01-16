import {instance } from './api'

export const usersAPI = {
    getUsers() {
    return instance.get(`users`).then(res => res.data)
    }
}