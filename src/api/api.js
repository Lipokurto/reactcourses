import * as axios from 'axios'

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'2612e6a9-01e9-49b9-a103-12b036e6f136'
        },
    
})


export const usersApi ={
    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then (response => response.data)},
    follow(id) {
        return instance.delete(`follow/${id}`).then (response => response.data)},
    unfollow(id) {
        return instance.post(`unfollow/${id}`).then (response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/`+userId)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}