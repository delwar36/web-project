import * as actionTypes from '../ActionTypes';
import axios from '../../../axios';
import { tokenHeadersNormal, tokenHeadersMultipart } from '../HeaderConfig';

const profileUpdateStart = () => {
    return {
        type: actionTypes.PROFILE_UPDATE_START
    }
}

const profileUpdateLPDismiss = () => {
    return {
        type: actionTypes.PROFILE_UPDATE_LP_DISMISS
    }
}

const uploadingPercentage = (percentage) => {
    return {
        type: actionTypes.PROFILE_UPDATE_LP,
        payload: { percentage }
    }
}

const percentageDismiss = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(profileUpdateLPDismiss())
        }, 5000)
    }
}

const profileUpdateSuccess = (success) => {
    return {
        type: actionTypes.PROFILE_UPDATE_SUCCESS,
        payload: { message: success }
    }
}

const profileUpdateFail = (error) => {
    return {
        type: actionTypes.PROFILE_UPDATE_FAIL,
        payload: { message: error }
    }
};

const fetchProfileStart = () => {
    return {
        type: actionTypes.PROFILE_FETCH_START
    }
}

const fetchProfileFinished = (profile) => {
    return {
        type: actionTypes.PROFILE_FETCH_FINISHED,
        payload: { profile }
    }
}

const fetchProfileError = (message) => {
    return {
        type: actionTypes.PROFILE_FETCH_ERROR,
        payload: { message }
    }
}
export const profileUpdate = (body) => {
    return (dispatch) => {
        dispatch(profileUpdateStart());
        const url = '/user/updateUser';
        axios.patch(url, body, {
            headers: tokenHeadersMultipart().headers,
            onUploadProgress: (progressEvent) => {
                dispatch(uploadingPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))));
            }
        }).then(response => {
            dispatch(profileUpdateSuccess(response.data.message));
            dispatch(percentageDismiss());
        }).catch(error => {
            if (error.response === undefined) return;
            dispatch(profileUpdateFail(error.response.data.message))
        });
    }
}

export const getProfile = () => {
    return (dispatch) => {
        dispatch(fetchProfileStart());
        const url = '/user/getProfile';
        axios.get(url, { headers: tokenHeadersNormal().headers })
            .then(response => dispatch(fetchProfileFinished(response.data.profile)))
            .catch(error => {
                if (error.response === undefined) return;
                dispatch(fetchProfileError(error.response.data.message))
            });
    }
}
