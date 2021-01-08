import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    loading: false,
    error: false,
    message: null,
    advertiseData: null,
    userCreatedAdvertises: null,
    loading_percentage: 0
};


const advertiseItemsFetchUploadStart = (state, action) => {
    return updateObject(state, { loading: true, message: null })
}

const advertiseUserItemsFetchUploadSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        userCreatedAdvertises: action.payload.userAdvertisesData,
        message: action.payload.message
    })
};
const advertiseItemsFetchUploadSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        advertiseData: action.payload.advertiseData,
        message: action.payload.message
    })
}

const advertiseItemsFetchUploadError = (state, action) => {
    return updateObject(state, {
        loading: false, error: true,
        message: action.payload.message,
    })
}

const uploadingPercentage = (state, action) => {
    return updateObject(state, {
        loading: true,
        loading_percentage: action.payload.percentage.toString(),
        error: false
    })
}

const advertiseItemsLPDismiss = (state, action) => {
    return updateObject(state, {
        loading: false,
        loading_percentage: '',
        message: '',
        error: false
    })
}

export const DashboardAdvertisesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_START: return advertiseItemsFetchUploadStart(state, action);
        case actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_SUCCESS: return advertiseItemsFetchUploadSuccess(state, action);
        case actionTypes.ADVERTISE_USER_ITEMS_FETCH_UPLOAD_SUCCESS: return advertiseUserItemsFetchUploadSuccess(state, action);
        case actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_ERROR: return advertiseItemsFetchUploadError(state, action);
        case actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_LP: return uploadingPercentage(state, action);
        case actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_LP_DISMISS: return advertiseItemsLPDismiss(state, action);
        default: return state;
    }
}