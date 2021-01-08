import * as actionTypes from '../ActionTypes';
import axios from '../../../axios';
import { headersNormal, tokenHeadersNormal } from '../HeaderConfig';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

const authSuccess = (authStatus, message, token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: { token, authStatus, message, user }
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        payload: { message: error }
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};
const deleteMessage = () => {
    return {
        type: actionTypes.AUTH_MESSAGE_DELETE
    };
}
const automaticMessageDelete = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(deleteMessage())
        }, 4000);
    }
}
const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
    }
}

export const auth = (body, isSignUp) => {
    return (dispatch) => {
        dispatch(authStart());
        let url = '/user/register';
        if (!isSignUp) url = 'user/login';
        axios.post(url, body, { headers: headersNormal.headers })
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('expirationDate', expirationDate);
                const { authStatus, message, token, expiresIn, user } = response.data;
                dispatch(authSuccess(authStatus, message, token, user));
                dispatch(automaticMessageDelete())
                dispatch(checkAuthTimeout(expiresIn))
            })
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(authFail(error.response.data.message))
            });
    }
};

// export const setAuthRedirectPath = (path) => {
//     return {
//         type: actionTypes.SET_AUTH_REDIRECT_PATH,
//         path: path
//     };
// };

export const authCheckState = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const url = '/user/userInfo';
                axios.get(url, { headers: tokenHeadersNormal().headers })
                    .then(response => {
                        dispatch(authSuccess(true, '', token, response.data.user));
                        // getting remaining time
                        // further we will use refresh token so that user never goes to logout
                        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
                    })
                    .catch(error => {
                        if (error.response === undefined) return;
                        dispatch(authFail(error.response.data.message));
                    })
            }
        }
    }
};
