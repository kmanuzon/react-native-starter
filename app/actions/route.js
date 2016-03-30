'use strict';

export const RENDER_LISTVIEW_ALPHA = 'RENDER_LISTVIEW_ALPHA';
export const RENDER_LISTVIEW_NUMERIC = 'RENDER_LISTVIEW_NUMERIC';

export function renderListViewAlpha() {
    return {
        type: RENDER_LISTVIEW_ALPHA,
        route: {
            name: 'listviewAlpha',
            action: 'push'
        }
    };
}

export function renderListViewNumeric() {
    return {
        type: RENDER_LISTVIEW_NUMERIC,
        route: {
            name: 'listviewNumeric',
            action: 'push'
        }
    };
}
