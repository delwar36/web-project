import * as actionTypes from '../ActionTypes';
import axios from '../../../axios';
import { headersNormal, tokenHeadersNormal } from '../HeaderConfig';

const advertisesFetchStart = () => {
    return {
        type: actionTypes.ADVERTISES_FETCH_START
    }
};

const advertisesFetchSuccess = (advertisesData, message = null) => {
    return {
        type: actionTypes.ADVERTISES_FETCH_SUCCESS,
        payload: { advertisesData }
    }
};
const singleAdvertiseFetchSuccess = (advertiseData) => {
    return {
        type: actionTypes.SINGLE_ADVERTISE_FETCH_SUCCESS,
        payload: { advertiseData }
    }
}
const singlePurchaseAdvertiseSuccess = (message) => {
    return {
        type: actionTypes.SINGLE_PURCHASE_ADVERTISE_SUCCESS,
        payload: { message }
    }
}
const advertisesFetchError = (error) => {
    return {
        type: actionTypes.ADVERTISES_FETCH_ERROR,
        payload: { message: error }
    }
};

export const onfetchAdvertises = (advertiseType) => {
    return (dispatch) => {
        dispatch(advertisesFetchStart());
        const url = `/dashboardAdvertise/allAdvertises/${ advertiseType }`;
        axios.get(url, { headers: headersNormal.headers })
            .then(response => dispatch(advertisesFetchSuccess(response.data.advertisesData)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(advertisesFetchError(error.response.data.message))
            });
    }
}

export const onfetchSingleAdvertise = (advertiseId) => {
    return (dispatch) => {
        dispatch(advertisesFetchStart());
        const url = `/dashboardAdvertise/singleAdvertise/${ advertiseId }`;
        axios.get(url, { headers: headersNormal.headers })
            .then(response => dispatch(singleAdvertiseFetchSuccess(response.data.advertiseData)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(advertisesFetchError(error.response.data.message))
            });
    }
}

export const onPurchaseAdvertise = (body) => {
    return (dispatch) => {
        dispatch(advertisesFetchStart());
        const url = 'purchaseAdvertise/userBuyAdvertise';
        axios.post(url, body, { headers: tokenHeadersNormal().headers })
            .then(response => dispatch(singlePurchaseAdvertiseSuccess(response.data.message)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(advertisesFetchError(error.response.data.message))
            });
    }
}

