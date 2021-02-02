import { create } from 'apisauce'
import { config } from '../constants';
import cookie from 'react-cookies'

export const api = create({
    baseURL: config.apiUrl,
    headers: { Accept: 'application/json' },
    timeout: 30000 // 30s ~ .5m
})

export const formDataApi = create({
    baseURL: config.apiUrl,
    headers: { Accept: 'multipart/form-data' },
    timeout: 120000 // 120s ~ 2m
})

const logout = () => {
    // remove user from cookie storage to log user out
    cookie.remove('USER_TOKEN', { path: '/' })
    window.location.reload(true);
}

export const handleResponse = (response) => {
    if (response.ok || response.status === 400) {
        const responseBody = response.data;
        if (responseBody.IsSuccess) {
            return responseBody
        } else {
            if (responseBody.Messages && responseBody.Messages.length) {
                return Promise.reject(responseBody.Messages[0])
            } else {
                return Promise.reject(['Đã có lỗi xảy ra, vui lòng thử lại sau']);
            }
        }
    } else {
        if (response.status === 401) {
            logout();
        }
        if (response.status === 404) {
            return Promise.reject(response.status);
        }

        const error = response.problem;
        return Promise.reject(error);
    }
}