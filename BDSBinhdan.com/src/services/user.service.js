import { authHeader } from '../helpers';
import { api, handleResponse, formDataApi } from './api'
import cookie from 'react-cookies'

const login = ({ Phone, Password }) => {
    return api.post(`/Token`, JSON.stringify({ Phone, Password })).then(handleResponse);
}

const socialLogin = (SocialType, SocialId, Token, FullName = '', Email = '', Avatar = '', PhoneNumber = '', Password = '',) => {
    return api.post(`/LoginSocial`, { SocialType, SocialId, Token, FullName, Email, Avatar, PhoneNumber, Password, }).then(
        handleResponse,
    );
}

const register = (PhoneNumber, Password, ReferralPhone, CaptchaToken) => {
    return api.post(`/Register`, { PhoneNumber, Password, ReferralPhone, CaptchaToken }).then(
        handleResponse,
    );
}

const getUserInfo = (UserId = null) => {
    api.setHeaders({
        ...authHeader()
    })
    return api.get(`/User/GetInfo${UserId ? '?Id=' + UserId : ''}`).then(handleResponse);
}

const updateUserInfo = (formData) => {
    formDataApi.setHeaders({
        ...authHeader()
    })
    return formDataApi.post(`/User/UpdateProfile`, formData).then(handleResponse);
}

const getWallet = () => {
    api.setHeaders({
        ...authHeader()
    })
    return api.get(`/User/GetWallet`).then(handleResponse);
}

const sendOTP = () => {
    api.setHeaders({
        ...authHeader()
    })
    return api.post(`/OTP`).then(handleResponse);
}

const verifyOTP = (OTP) => {
    api.setHeaders({
        ...authHeader()
    })
    return api.post(`/VerifyOTP?OTP=${OTP}`).then(handleResponse);
}

const getInterestedCategories = () => {
    api.setHeaders({
        ...authHeader()
    });
    return api.get(`/CategoryInterest/GetAll`, { Page: 1, PageSize: 1000 }).then(handleResponse);
}

const categoryInterest = (CategoryId, Interest) => {
    api.setHeaders({
        ...authHeader()
    });
    return api.post(`/CategoryInterest/Create`, { CategoryId, Interest }).then(handleResponse);
}

const getNotifications = (PageIndex, PageSize) => {
    api.setHeaders({
        ...authHeader()
    });
    return api.get(`/Notification/GetAll`, { PageIndex, PageSize }).then(handleResponse);
}

const followUser = (UserId, Follow) => {
    api.setHeaders({
        ...authHeader()
    });
    return api.post(`/UserFollow/Follow`, { UserId, Follow }).then(handleResponse);
}

const getFollowedUsers = (PageIndex, PageSize) => {
    api.setHeaders({
        ...authHeader()
    });
    return api.get(`/UserFollow/GetAll`, { PageIndex, PageSize }).then(handleResponse);
}

const countUnread = () => {
    api.setHeaders({
        ...authHeader()
    });
    return api.get(`/Common/CountData`).then(handleResponse);
}

const reportUser = (UserId, FeedbackContent) => {
    api.setHeaders({
        ...authHeader()
    })
    return api.post(`/User/Report`, { UserId, FeedbackContent }).then(handleResponse);
}

const logout = () => {
    // remove user from local storage to log user out
    cookie.remove('USER_TOKEN', { path: '/' })
    window.location.reload(true);
}

const changePassword = (OldPassword, Password) => {
    api.setHeaders({
        ...authHeader()
    })
    return api.post(`/ChangePassword`, { OldPassword, Password }).then(handleResponse);
}

const verifyUser = (formData) => {
    formDataApi.setHeaders({
        ...authHeader()
    })
    return formDataApi.post(`/VerifyUser/Verify`, formData).then(handleResponse);
}

const forgotPassword = (PhoneNumber) => {
    api.setHeaders({
        ...authHeader()
    })
    return api.post(`/ForgotPassword`, { PhoneNumber }).then(handleResponse);
}

const changePasswordOTP = (PhoneNumber, OTP, Password) => {
    api.setHeaders({
        ...authHeader()
    })
    return api.post(`/ChangePasswordOTP`, { PhoneNumber, OTP, Password }).then(handleResponse);
}

const getUsersReferral = () => {
    api.setHeaders({
        ...authHeader()
    })
    return api.get(`/User/GetUsersReferral`).then(handleResponse);
}

const requestConfirmEmail = () => {
    api.setHeaders({
        ...authHeader()
    })
    return api.post(`/RequestConfirmEmail`).then(handleResponse);
}

const confirmEmail = (UserId, Token) => {
    return api.post(`/ConfirmEmail?userId=${UserId}&token=${Token}`).then(handleResponse);
}

const userService = {
    login,
    socialLogin,
    logout,
    register,
    getUserInfo,
    updateUserInfo,
    getWallet,
    sendOTP,
    verifyOTP,
    getInterestedCategories,
    categoryInterest,
    getNotifications,
    followUser,
    getFollowedUsers,
    countUnread,
    reportUser,
    changePassword,
    verifyUser,
    forgotPassword,
    changePasswordOTP,
    getUsersReferral,
    requestConfirmEmail,
    confirmEmail
};

export default userService;