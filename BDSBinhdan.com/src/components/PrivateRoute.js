import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookie from 'react-cookies'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        cookie.load('USER_TOKEN')
            ? <Component {...props} />
            : <Redirect to={{ pathname: `/dang-nhap`, state: { from: props.location } }} />
    )} />
)

export default PrivateRoute;