import { userConstant } from '../constants';

const INITIAL_STATE = {
};

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Login - Logout
        case userConstant.LOGIN:
            return {
                ...state,
                loginLoading: true,
                loginError: null
            };
        case userConstant.LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                currentUser: action.user
            };
        case userConstant.LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginError: action.error
            };
        case userConstant.LOGOUT:
            return INITIAL_STATE;

            // Register
        case userConstant.REGISTER_REQUEST:
            return {
                ...state,
                register: {
                    success: null,
                    loading: true,
                },
                registerError: null
            };
        case userConstant.REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    success: true,
                    loading: false,
                },
            };
        case userConstant.REGISTER_FAILURE:
            return {
                ...state,
                register: {
                    success: false,
                    loading: false,
                },
                registerError: action.error
            };

            // Get Info
        case userConstant.GET_INFO:
            return {
                ...state,
                userInfo: {
                    loading: true,
                },
            };

        case userConstant.GET_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.User,
            };

        case userConstant.GET_INFO_FAILURE:
            return {
                ...state,
                userInfo: {
                    loading: false,
                    success: false,
                },
            };

            // Get current User
        case userConstant.GET_CURRENT_USER:
            return {
                ...state,
                currentUser: {
                    loading: true,
                },
            };

        case userConstant.GET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.User,
            };

        case userConstant.GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                currentUser: {
                    loading: false,
                    success: false,
                },
            };

            // Update user info
        case userConstant.UPDATE_INFO:
            return {
                ...state,
                updateUser: {
                    loading: true,
                },
                updateInfoError: null
            };
        case userConstant.UPDATE_INFO_SUCCESS:
            return {
                ...state,
                updateUser: {
                    loading: false,
                    success: true,
                },
                currentUser: state.currentUser && action.User.Id === state.currentUser.Id ?
                    action.User : state.currentUser,
                userInfo: state.userInfo && action.User.Id === state.userInfo.Id ?
                    action.User : state.userInfo,
            };
        case userConstant.UPDATE_INFO_FAILURE:
            {
                return {
                    ...state,
                    updateUser: {
                        loading: false,
                        success: false,
                    },
                    updateInfoError: action.error
                };
            }

            // GET USER WALLET 
        case userConstant.GET_WALLET:
            {
                return {
                    ...state,
                    getWalletLoading: true,
                    getWalletError: null
                }
            }
        case userConstant.GET_WALLET_SUCCESS:
            {
                return {
                    ...state,
                    getWalletLoading: false,
                    userWallet: action.data
                }
            }
        case userConstant.GET_WALLET_FAILURE:
            {
                return {
                    ...state,
                    getWalletLoading: false,
                    getWalletError: action.error
                }
            }

            // verify phone number
        case userConstant.VERIFY_PHONE_NUMBER:
            {
                return {
                    ...state,
                    verifyPhoneNumerLoading: true,
                    verifyPhoneNumerError: null,
                    verifyPhoneNumerSuccess: null
                }
            }
        case userConstant.VERIFY_PHONE_NUMBER_SUCCESS:
            {
                let { currentUser } = state;
                return {
                    ...state,
                    verifyPhoneNumerLoading: false,
                    verifyPhoneNumerSuccess: true,
                    currentUser: {...currentUser, PhoneNumberConfirmed: true }
                }
            }
        case userConstant.VERIFY_PHONE_NUMBER_FAILURE:
            {
                return {
                    ...state,
                    verifyPhoneNumerLoading: false,
                    verifyPhoneNumerError: action.error
                }
            }

            // get list interested categories
        case userConstant.GET_INTERESTED_CATEGORIES:
            {
                return {
                    ...state,
                    getInterestedCategoriesLoading: true,
                    getInterestedCategoriesError: null
                }
            }

        case userConstant.GET_INTERESTED_CATEGORIES_SUCCESS:
            {
                return {
                    ...state,
                    getInterestedCategoriesLoading: false,
                    interestedCategories: action.data
                }
            }

        case userConstant.GET_INTERESTED_CATEGORIES_FAILURE:
            {
                return {
                    ...state,
                    getInterestedCategoriesLoading: false,
                    getInterestedCategoriesError: action.error
                }
            }

            // category interest
        case userConstant.CATEGORY_INTEREST:
            {
                let { interestedCategories } = state;
                let newInterestedCategories = interestedCategories ? interestedCategories : [];
                if (action.interest) {
                    newInterestedCategories.push({ Id: action.category.Id, Name: action.category.Name, IconPath: action.category.IconPath, Slug: action.category.Slug })
                } else {
                    newInterestedCategories = newInterestedCategories.filter(obj => obj.Id !== action.category.Id)
                }
                return {
                    ...state,
                    interestedCategories: newInterestedCategories.concat([])
                }
            }

            // get notifications
        case userConstant.GET_NOTIFICATIONS:
            {
                return {
                    ...state,
                    getNotificationsLoading: true,
                    getNotificationsError: null
                }
            }
        case userConstant.GET_NOTIFICATIONS_SUCCESS:
            {
                const { notifications } = state;
                let newNotifications = [];
                if (notifications && notifications.length) {
                    newNotifications = notifications.concat(action.data.Data)
                } else {
                    newNotifications = action.data.Data
                }
                return {
                    ...state,
                    getNotificationsLoading: false,
                    notifications: newNotifications,
                    totalNotifications: action.data.TotalItems
                }
            }
        case userConstant.GET_NOTIFICATIONS_FAILURE:
            {
                return {
                    ...state,
                    getNotificationsLoading: false,
                    getNotificationsError: action.error,
                    totalNotifications: 0
                }
            }

            // follow user
        case userConstant.FOLLOW_USER:
            {
                let { followedUsers, userInfo } = state;
                let index = followedUsers ? followedUsers.findIndex(obj => obj.Id === action.UserId) : -1;
                if (index !== -1) {
                    followedUsers[index].FollowLoading = false;
                    followedUsers[index].Followed = action.Follow;
                    followedUsers[index].FollowError = null;
                }
                let newUserInfo = null;
                if (userInfo && userInfo.Id === action.UserId) {
                    newUserInfo = {...userInfo, FollowLoading: false, Followed: action.Follow, FollowError: action.error }
                } else {
                    newUserInfo = userInfo;
                }
                return {
                    ...state,
                    userInfo: newUserInfo,
                    followedUsers: followedUsers ? followedUsers.concat([]) : []
                }
            }
        case userConstant.FOLLOW_USER_SUCCESS:
            {
                let { followedUsers, userInfo } = state;
                let index = followedUsers ? followedUsers.findIndex(obj => obj.Id === action.UserId) : -1;
                if (index !== -1) {
                    followedUsers[index].FollowLoading = false;
                }
                let newUserInfo = null;
                if (userInfo && userInfo.Id === action.UserId) {
                    newUserInfo = {...userInfo, FollowLoading: false }
                } else {
                    newUserInfo = userInfo;
                }
                return {
                    ...state,
                    userInfo: newUserInfo,
                    followedUsers: followedUsers ? followedUsers.concat([]) : []
                }
            }
        case userConstant.FOLLOW_USER_FAILURE:
            {
                let { followedUsers, userInfo } = state;
                let index = followedUsers ? followedUsers.findIndex(obj => obj.Id === action.UserId) : -1;
                if (index !== -1) {
                    followedUsers[index].FollowLoading = false;
                    followedUsers[index].FollowError = action.error;
                }
                let newUserInfo = null;
                if (userInfo && userInfo.Id === action.UserId) {
                    newUserInfo = {...userInfo, FollowLoading: false, FollowError: action.error }
                } else {
                    newUserInfo = userInfo;
                }
                return {
                    ...state,
                    userInfo: newUserInfo,
                    followedUsers: followedUsers ? followedUsers.concat([]) : []
                }
            }

            // get followed users
        case userConstant.GET_FOLLOWED_USERS:
            {
                return {
                    ...state,
                    getFollowedUsersLoading: true,
                    getFollowedUsersError: null
                }
            }

        case userConstant.GET_FOLLOWED_USERS_SUCCESS:
            {
                return {
                    ...state,
                    getFollowedUsersLoading: false,
                    followedUsers: action.data.Data,
                    totalFollowedUsers: action.data.TotalItems
                }
            }

        case userConstant.GET_FOLLOWED_USERS_FAILURE:
            {
                return {
                    ...state,
                    getFollowedUsersLoading: false,
                    getFollowedUsersError: action.error
                }
            }

            // count unread data
        case userConstant.COUNT_UNREAD:
            {
                return {
                    ...state,
                    countUnreadLoading: true,
                    countUnreadError: null
                }
            }

        case userConstant.COUNT_UNREAD_SUCCESS:
            {
                return {
                    ...state,
                    countUnreadLoading: false,
                    unreadNotifications: action.unreadNotifications,
                    unreadMessages: action.unreadMessages
                }
            }

        case userConstant.COUNT_UNREAD_FAILURE:
            {
                return {
                    ...state,
                    countUnreadLoading: false,
                    countUnreadError: action.error
                }
            }

            // report user
        case userConstant.REPORT_USER:
            {
                return {
                    ...state,
                    reportUserLoading: true,
                    reportUserError: null
                }
            }
        case userConstant.REPORT_USER_SUCCESS:
            {
                let { reportedUsers } = state;
                return {
                    ...state,
                    reportUserLoading: false,
                    reportedUsers: reportedUsers ? reportedUsers.concat([action.userId]) : [action.userId]
                }
            }
        case userConstant.REPORT_USER_FAILURE:
            {
                return {
                    ...state,
                    reportUserLoading: false,
                    reportUserError: action.error
                }
            }

            // change password
        case userConstant.CHANGE_PASSWORD:
            {
                return {
                    ...state,
                    changePasswordLoading: true,
                    changePasswordError: null
                }
            }
        case userConstant.CHANGE_PASSWORD_SUCCESS:
            {
                return {
                    ...state,
                    changePasswordLoading: false
                }
            }
        case userConstant.CHANGE_PASSWORD_FAILURE:
            {
                return {
                    ...state,
                    changePasswordLoading: false,
                    changePasswordError: action.error
                }
            }

            // verify user
        case userConstant.VERIFY_USER:
            {
                return {
                    ...state,
                    verifyUserLoading: true,
                    verifyUserError: null
                }
            }
        case userConstant.VERIFY_USER_SUCCESS:
            {
                return {
                    ...state,
                    verifyUserLoading: false
                }
            }
        case userConstant.VERIFY_USER_FAILURE:
            {
                return {
                    ...state,
                    verifyUserLoading: false,
                    verifyUserError: action.error
                }
            }
            // forgot password
        case userConstant.FORGOT_PASSWORD_REQUEST:
            {
                return {
                    ...state,
                    forgotPasswordLoading: true,
                    forgotPasswordError: null,
                    forgotPasswordSuccess: false,
                }
            }
        case userConstant.FORGOT_PASSWORD_SUCCESS:
            {
                return {
                    ...state,
                    forgotPasswordLoading: false,
                    forgotPasswordSuccess: true,
                }
            }
        case userConstant.FORGOT_PASSWORD_FAILURE:
            {
                return {
                    ...state,
                    forgotPasswordLoading: false,
                    forgotPasswordError: action.error,
                    forgotPasswordSuccess: false,
                }
            }
            // change password otp
        case userConstant.CHANGE_PASSWORD_OTP:
            {
                return {
                    ...state,
                    changePasswordOTPLoading: true,
                    changePasswordOTPError: null,
                    changePasswordOTPSuccess: false,
                }
            }
        case userConstant.CHANGE_PASSWORD_OTP_SUCCESS:
            {
                return {
                    ...state,
                    changePasswordOTPLoading: false,
                    changePasswordOTPSuccess: true,
                }
            }
        case userConstant.CHANGE_PASSWORD_OTP_FAILURE:
            {
                return {
                    ...state,
                    changePasswordOTPLoading: false,
                    changePasswordOTPError: action.error,
                    changePasswordOTPSuccess: false,
                }
            }

            // get users referral
        case userConstant.GET_USERS_REFERRAL:
            {
                return {
                    ...state,
                    getUsersReferralLoading: true,
                    getUsersReferralError: null
                }
            }
        case userConstant.GET_USERS_REFERRAL_SUCCESS:
            {
                return {
                    ...state,
                    getUsersReferralLoading: false,
                    usersReferral: action.data
                }
            }
        case userConstant.GET_USERS_REFERRAL_FAILURE:
            {
                return {
                    ...state,
                    getUsersReferralLoading: false,
                    getUsersReferralError: action.error
                }
            }
        default:
            return state;
    }
}

export default user;