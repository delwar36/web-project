import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: false,
    message: null,
    advertisesData: null,
    singleAdvertiseData: null
};

const advertisesFetchStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        message: null
    })
};

const advertisesFetchSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        advertisesData: action.payload.advertisesData.length > 0 ? action.payload.advertisesData : null
    });
};

const singleAdvertiseFetchSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        singleAdvertiseData: action.payload.advertiseData
    })
};
const singleAdvertisePurchaseSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.payload.message
    })
};
const advertisesFetchError = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.payload.message,
        error: true
    })
};

export const NormalAdvertisesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADVERTISES_FETCH_START: return advertisesFetchStart(state, action);
        case actionTypes.ADVERTISES_FETCH_SUCCESS: return advertisesFetchSuccess(state, action);
        case actionTypes.ADVERTISES_FETCH_ERROR: return advertisesFetchError(state, action);
        case actionTypes.SINGLE_ADVERTISE_FETCH_SUCCESS: return singleAdvertiseFetchSuccess(state, action);
        case actionTypes.SINGLE_PURCHASE_ADVERTISE_SUCCESS: return singleAdvertisePurchaseSuccess(state, action);
        default: return state;
    }
}
