'use strict';

import {connect} from 'react-redux';
import Login from '../components/Login';
import {authenticate} from '../actions/authentication';

const mapStateToProps = function(state) {
    return {};
};

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmitHandler: function(publisher_id, username, password) {
            dispatch(authenticate(publisher_id, username, password));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
