'use strict';

import React from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import Router from '../containers/Router';
import renderScene from '../reducers/route';

const loggerMiddleware = createLogger();

/**
 * This is what the state should look.
 */
/*
{
    "route": {
        "name": "login",
        "action": "push"
    }
}
*/


const rootReducer = function(state = {}, action) {
    return {
        route: renderScene(state.route, action)
    };
};

const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

export default React.createClass({
    render: function() {
        return React.createElement(Provider, {store: store},
            React.createElement(Router)
        );
    }
});
