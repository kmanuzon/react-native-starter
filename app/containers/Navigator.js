'use strict';

import React from 'react-native';
import {connect} from 'react-redux';
import NavigationBar from '../containers/NavigationBar';
import routeStack from '../containers/routeStack';

const renderScene = function(route, navigator) {
    return React.createElement(routeStack[route.name].component);
};

const mapStateToProps = function(state) {
    return {};
};

const mapDispatchToProps = function(dispatch) {
    return {
        //navigationBar: React.createElement(NavigationBar),
        initialRoute: {name: 'login'},
        renderScene: renderScene
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {withRef: true}
)(React.Navigator);
