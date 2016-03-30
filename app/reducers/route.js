'use strict';

import {
    RENDER_LISTVIEW_ALPHA,
    RENDER_LISTVIEW_NUMERIC
} from '../actions/route';

const initialState = {
    name: 'login',
    action: 'push'
};

export default function renderScene(state = initialState, action) {
    switch (action.type) {
        case RENDER_LISTVIEW_ALPHA: // fall through.
        case RENDER_LISTVIEW_NUMERIC:
            return action.route;
        default:
            return state;
    }
}
