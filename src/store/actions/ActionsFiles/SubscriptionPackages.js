import * as actionTypes from '../ActionTypes';
import axios from '../../../axios';
import { tokenHeadersNormal, headersNormal } from '../HeaderConfig';

const subPackagesStart = () => {
    return { type: actionTypes.SUB_PACKAGES_FETCH_START }
}

const getSubPackagesSuccess = (packages) => {
    return {
        type: actionTypes.GET_SUB_PACKAGES_FETCH_SUCCESS,
        payload: { packages }
    }
}
const selectSubPackagesSuccess = (message) => {
    return {
        type: actionTypes.SELECT_SUB_PACKAGES_SUCCESS,
        payload: { message }
    }
}
const postSubPackageSuccess = (message) => {
    return {
        type: actionTypes.POST_SUB_PACKAGES_FETCH_SUCCESS,
        payload: { message }
    }
}

const subPackagesFail = (error) => {
    return {
        type: actionTypes.SUB_PACKAGES_FETCH_FAIL,
        payload: { message: error }
    }
};

// this related reducer not completed yet, this is for basically admin dashboard
export const postSubscriptionPackage = (body) => {
    return (dispatch) => {
        dispatch(subPackagesStart());
        const url = '/subscription/package';
        axios.post(url, body, { headers: tokenHeadersNormal().headers })
            .then(response => dispatch(postSubPackageSuccess(response.data.message)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(subPackagesFail(error.response.data.message))
            });
    }
}

export const getSubscriptionPackages = () => {
    return (dispatch) => {
        dispatch(subPackagesStart());
        const url = '/subscription/packages';
        axios.get(url, { headers: headersNormal.headers })
            .then(response => dispatch(getSubPackagesSuccess(response.data.packages)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(subPackagesFail(error.response.data.message))
            });
    }
}

export const selectSubscriptionPackage = (body) => {
    return (dispatch) => {
        dispatch(subPackagesStart());
        const url = '/subscription/doSubscribed';
        axios.post(url, body, { headers: tokenHeadersNormal().headers })
            .then(response => dispatch(selectSubPackagesSuccess(response.data.message)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(subPackagesFail(error.response.data.message))
            });
    }
}
