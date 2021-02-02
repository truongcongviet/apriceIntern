import cookie from 'react-cookies'

const authHeader = () => {
    // return authorization header with jwt token
    const token = cookie.load('USER_TOKEN');
    if (token) {
        return { Authorization: 'Bearer ' + token };
    }
    return {};
}

export default authHeader;