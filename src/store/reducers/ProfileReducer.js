import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: false,
    message: null,
    loading_percentage: 0,
    profile: null
};

const profileUpdateStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: false
    })
}

const uploadingPercentage = (state, action) => {
    return updateObject(state, {
        loading: true,
        loading_percentage: action.payload.percentage.toString(),
        error: false
    })
}

const profileUpdateLPDismiss = (state, action) => {
    return updateObject(state, {
        loading: false,
        loading_percentage: '',
        message: '',
        error: false
    })
}

const profileUpdateSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.payload.message
    })
}

const profileUpdateFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: true,
        message: action.payload.message
    })
}

const fetchProfileStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: false
    });
}

const fetchProfileFinished = (state, action) => {
    return updateObject(state, {
        loading: false,
        profile: action.payload.profile,
        error: false
    });
}

const fetchProfileError = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: true,
        message: action.payload.message
    });
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PROFILE_UPDATE_START: return profileUpdateStart(state, action);
        case actionTypes.PROFILE_UPDATE_LP: return uploadingPercentage(state, action);
        case actionTypes.PROFILE_UPDATE_LP_DISMISS: return profileUpdateLPDismiss(state, action);
        case actionTypes.PROFILE_UPDATE_SUCCESS: return profileUpdateSuccess(state, action);
        case actionTypes.PROFILE_UPDATE_FAIL: return profileUpdateFail(state, action);
        case actionTypes.PROFILE_FETCH_START: return fetchProfileStart(state, action);
        case actionTypes.PROFILE_FETCH_FINISHED: return fetchProfileFinished(state, action);
        case actionTypes.PROFILE_FETCH_ERROR: return fetchProfileError(state, action);
        default: return state;

    }
}