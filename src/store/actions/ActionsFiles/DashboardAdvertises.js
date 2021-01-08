import * as actionTypes from '../ActionTypes';
import axios from '../../../axios';
import { tokenHeadersNormal, tokenHeadersMultipart } from '../HeaderConfig';

const advertiseItemsFetchUploadStart = () => {
    return {
        type: actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_START
    }
};
const uploadingPercentage = (percentage) => {
    return {
        type: actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_LP,
        payload: { percentage }
    }
}

const advertiseItemsLPDismiss = () => {
    return {
        type: actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_LP_DISMISS
    }
}

const percentageDismiss = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(advertiseItemsLPDismiss())
        }, 4000)
    }
}
const advertiseUserItemsFetchUploadSuccess = (userAdvertisesData, message = null) => {
    return {
        type: actionTypes.ADVERTISE_USER_ITEMS_FETCH_UPLOAD_SUCCESS,
        payload: { userAdvertisesData, message }
    }
};
const advertiseItemsFetchUploadSuccess = (advertiseData, message = null) => {
    return {
        type: actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_SUCCESS,
        payload: { advertiseData, message }
    }
};

const advertiseItemsFetchUploadError = (error) => {
    return {
        type: actionTypes.ADVERTISE_ITEMS_FETCH_UPLOAD_ERROR,
        payload: { message: error }
    }
};

export const fetchUserAdvertises = () => {
    return (dispatch) => {
        dispatch(advertiseItemsFetchUploadStart());
        const url = '/dashboardAdvertise/userSpecificAdvertises';
        axios.get(url, { headers: tokenHeadersNormal().headers })
            .then(response => dispatch(advertiseUserItemsFetchUploadSuccess(response.data.userAdvertisesData)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(advertiseItemsFetchUploadError(error.response.data.message))
            });
    }
}

export const fetchTypeAndSubtypes = () => {
    return (dispatch) => {
        dispatch(advertiseItemsFetchUploadStart());
        const url = '/dashboardAdvertise/types';
        axios.get(url, { headers: tokenHeadersNormal().headers })
            .then(response => dispatch(advertiseItemsFetchUploadSuccess(response.data.typeSubtypes)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(advertiseItemsFetchUploadError(error.response.data.message))
            });
    }
}

export const updateTypeAndSubtypes = (typeAndSubtypes) => {
    return (dispatch) => {
        dispatch(advertiseItemsFetchUploadStart());
        const url = '/dashboardAdvertise/types';
        const body = { typeAndSubtypes };
        axios.post(url, body, { headers: tokenHeadersNormal().headers })
            .then(response => dispatch(advertiseItemsFetchUploadSuccess(response.data.typeSubtypes, response.data.message)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(advertiseItemsFetchUploadError(error.response.data.message))
            });
    }
}

export const onSubmitAdvertiseForm = (body) => {
    return (dispatch) => {
        dispatch(advertiseItemsFetchUploadStart());
        const url = '/dashboardAdvertise/createAd';
        axios.post(url, body, {
            headers: tokenHeadersMultipart().headers,
            onUploadProgress: (progressEvent) => {
                dispatch(uploadingPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))));
            }
        }).then(response => {
            dispatch(advertiseItemsFetchUploadSuccess(null, response.data.message));
            dispatch(percentageDismiss());
        }).catch(error => {
            if (error.response === undefined) return;
            dispatch(advertiseItemsFetchUploadError(error.response.data.message))
        });
    }
}

