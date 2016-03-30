'use strict';

import React from 'react-native';

const View = React.createFactory(React.View);
const Text = React.createFactory(React.Text);
const ListView = React.createFactory(React.ListView);
const TouchableOpacity = React.createFactory(React.TouchableOpacity);
const TouchableHighlight = React.createFactory(React.TouchableHighlight);

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 20,
        backgroundColor: '#fff'
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#444'
    },
    separator: {
        height: 1,
        backgroundColor: '#E9E9E9'
    },
});

export default React.createClass({
    propTypes: {
        rows: React.PropTypes.array.isRequired,
        rowPressHandler: React.PropTypes.func.isRequired
    },
    render: function() {
        return View({style: styles.container},
            ListView({
                dataSource: this.getDataSource(),
                renderRow: this.renderRow,
                renderSeparator: this.renderSeparator
            })
        );
    },
    getDataSource: function() {
        var dataSource = new React.ListView.DataSource({rowHasChanged: function(r1, r2) {
            return r1 !== r2;
        }});
        return dataSource.cloneWithRows(this.props.rows);
    },
    renderRow: function(rowData, sectionID, rowID) {
        return TouchableHighlight(
            {
                onPress: () => this.props.rowPressHandler(rowData.id)
            },
            View({style: styles.row},
                Text({style: styles.text},
                    rowData.name
                    //rowData.name + '--' + sectionID + '--' + rowID
                )
            )
        );
    },
    renderSeparator: function(sectionID, rowID) {
        return View({
            key: sectionID + '-' + rowID,
            style: styles.separator
        });
    }
});
