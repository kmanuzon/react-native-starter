'use strict';

import {connect} from 'react-redux';
import {renderListViewNumeric} from '../actions/route';
import ListView from '../components/ListView';

const mapStateToProps = function(state) {
    return {};
};

const mapDispatchToProps = function(dispatch) {
    return {
        rows: rowsMock,
        rowPressHandler: function(id) {
            dispatch(renderListViewNumeric(id));
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
      name: 'A'
  },
  {
      id: '2',
      name: 'B'
  },
  {
      id: '3',
      name: 'C'
  }
];
