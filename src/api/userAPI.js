import axios from 'axios';
import { apiKey } from './config';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': apiKey
    }
});


export const userAPI = {
    getUsers(currentPage = 1, pageSiza = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSiza}`).then(response => {
            return response.data
        })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },

    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data;
            });
    }
};


export const authAPI = {
    me() {
        return instance.get('auth/me/', { withCredentials: true });
    }
}