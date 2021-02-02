import { call, put, takeLatest } from 'redux-saga/effects'
import { config, userConstant } from '../constants';
import { userService } from '../services';
import cookie from 'react-cookies'

function* login(action) {
    try {
        const response = yield call(userService.login, action.payload);
        const expires = new Date();
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 days
        cookie.save('USER_TOKEN', response.Data.accessToken, {
            path: '/',
            expires,
            maxAge: 1000,
            domain: config.domain,
            secure: config.cookieSecure
        });
        yield put({ type: userConstant.LOGIN_SUCCESS, user: response.Data });
    } catch (error) {
        yield put({ type: userConstant.LOGIN_FAILURE, error });
    }
}

function* userSaga() {
    yield takeLatest("LOGIN", login);
}

export default userSaga;