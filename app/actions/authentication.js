'use strict';

import {renderListViewAlpha} from '../actions/route';

export const AUTHENTICATE = 'AUTHENTICATE';
export const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION';
export const GRANTED_AUTHENTICATION = 'GRANTED_AUTHENTICATION';
export const FAILED_AUTHENTICATION = 'FAILED_AUTHENTICATION';

export function requestAuthentication() {
    return {
        type: REQUEST_AUTHENTICATION
    };
}

export function grantedAuthentication() {
    return {
        type: GRANTED_AUTHENTICATION
    };
}

export function failedAuthentication() {
    return {
        type: FAILED_AUTHENTICATION
    };
}

// thunk.
export function authenticate(navigator, publisher_id, username, password) {
    return function(dispatch, getState) {
        dispatch(requestAuthentication());
        dispatch(renderListViewAlpha());
    };
}
