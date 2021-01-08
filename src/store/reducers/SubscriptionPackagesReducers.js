import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: false,
    message: null,
    packages: null
};
const subPackagesStart = (state, action) => {
    return updateObject(state, {
        loading: true,
    })
}

const getSubPackagesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        packages: action.payload.packages
    })
}
const selectSubPackagesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        message: action.payload.message
    })
}

const subPackagesFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: true,
        message: action.payload.message
    })
};

export const SubscriptionPackagesReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUB_PACKAGES_FETCH_START: return subPackagesStart(state, action);
        case actionTypes.GET_SUB_PACKAGES_FETCH_SUCCESS: return getSubPackagesSuccess(state, action);
        case actionTypes.SELECT_SUB_PACKAGES_SUCCESS: return selectSubPackagesSuccess(state, action);
        case actionTypes.SUB_PACKAGES_FETCH_FAIL: return subPackagesFail(state, action);
        default: return state;
    }
};