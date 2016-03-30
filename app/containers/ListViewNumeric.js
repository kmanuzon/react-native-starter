'use strict';

import {connect} from 'react-redux';
import {renderListViewAlpha} from '../actions/route';
import ListView from '../components/ListView';

const mapStateToProps = function(state) {
    return {};
};

const mapDispatchToProps = function(dispatch) {
    return {
        rows: rowsMock,
        rowPressHandler: function(id) {
            dispatch(renderListViewAlpha(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListView);

const rowsMock = [
  {
      id: '1',
      name: '1'
  },
  {
      id: '2',
      name: '2'
  },
  {
      id: '3',
      name: '3'
  }
];
