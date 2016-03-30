'use strict';

import React from 'react-native';
import {connect} from 'react-redux';
import VectorIcons from 'react-native-vector-icons/Ionicons';

const Icon = React.createFactory(VectorIcons);
const Text = React.createFactory(React.Text);
const TouchableOpacity = React.createFactory(React.TouchableOpacity);

const styles = React.StyleSheet.create({
    title: {
        backgroundColor: '#00b3e3'
    },
    button: {
        backgroundColor: '#00b3e3'
    }
});

const routeMapper = {
    Title: function(route, navigator, index, navState) {
        //if (route.name === 'login') return null;

        console.log('route', route.title);
        return Text({style: {backgroundColor: '#00b3e3'}}, route.title);
    },
    LeftButton: function(route, navigator, index, navState) {
        //if (route.name === 'login') return null;

        return TouchableOpacity(
            {
                style: styles.button,
                onPress: () => navigator.pop()
            },
            Icon({name: 'ios-arrow-left', size: 20, color: '#ff0000'})
        );
    },
    RightButton: function(route, navigator, index, navState) {
        //if (route.name === 'login') return null;

        return TouchableOpacity(
            {
                style: styles.button,
            },
            Icon({name: 'ios-arrow-right', size: 20, color: '#ff0000'})
        );
    }
};

const mapStateToProps = function(state) {
    return {};
};

const mapDispatchToProps = function(dispatch) {
    return {
        routeMapper: routeMapper
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.Navigator.NavigationBar);
