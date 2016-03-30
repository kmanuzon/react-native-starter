'use strict';

import React from 'react-native';
import {connect} from 'react-redux';
import Navigator from '../containers/Navigator';

/**
 * Router component of this application. We make sure that this component is
 * rendered only once, updating the Navigator component with state to props data.
 */
const Router = React.createClass({
    propTypes: {
        route: React.PropTypes.object,
    },
    render: function() {
        return React.createElement(Navigator, {
            ref: ref => this.navRef = ref.getWrappedInstance()
        });
    },
    /**
     * Control Navigator component's scene here using the stored route in state.
     */
    componentWillReceiveProps: function(nextProps) {
        switch (nextProps.route.action) {
            case 'push': // fall through.
            default:
                this.navRef.push({name: nextProps.route.name});
                break;
        }
    },
    /**
     * Prevent re-rendering this component.
     */
    shouldComponentUpdate: function() {
        return false;
    }
});

const mapStateToProps = function(state) {
    return {
        route: state.route
    };
};

export default connect(mapStateToProps)(Router);
