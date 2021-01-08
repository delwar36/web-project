import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: false,
    message: null,
    user: null
};

const authStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: false
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.payload.token,
        isAuthenticated: action.payload.authStatus,
        message: action.payload.message,
        error: false,
        loading: false,
        user: action.payload.user
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: true,
        message: action.payload.message,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        message: '',
        isAuthenticated: false,
        user: null
    })
}

const automaticMessageDelete = (state, action) => {
    return updateObject(state, {
        message: null
    })
}

export const UserAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_MESSAGE_DELETE: return automaticMessageDelete(state, action);
        default: return state;
    }
};