'use strict';

import Login from '../containers/Login';
import ListViewAlpha from '../containers/ListViewAlpha';
import ListViewNumeric from '../containers/ListViewNumeric';

export default {
    login: {
        title: 'Login',
        component: Login
    },
    listviewAlpha: {
        title: 'Alpha',
        component: ListViewAlpha
    },
    listviewNumeric: {
        title: 'Numeric',
        component: ListViewNumeric
    }
};
