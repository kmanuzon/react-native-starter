'use strict';

import React from 'react-native';

const View = React.createFactory(React.View);
const Text = React.createFactory(React.Text);
const Image = React.createFactory(React.Image);
const TextInput = React.createFactory(React.TextInput);
const TouchableOpacity = React.createFactory(React.TouchableOpacity);
const TouchableHighlight = React.createFactory(React.TouchableHighlight);

const styles = React.StyleSheet.create({
    container: {
        flex: 1,
        /*backgroundColor: '#00ff00'*/
    },
    header: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
        /*backgroundColor: '#81c04d'*/
    },
    mark: {
        width: 300,
        height: 300
    },
    body: {
        flex: .46,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'flex-start',
        /*backgroundColor: '#ebeef0'*/
    },
    inputFields: {
        marginTop: 4,
        marginBottom: 16,
        /*backgroundColor: '#ff3366'*/
    },
    inputFieldContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9'
    },
    input: {
        width: 300,
        height: 36,
        fontSize: 16,
        color: '#444'
        /*backgroundColor: '#ffffff',*/
    },
    label: {
        fontSize: 12,
        color: '#8F8F8F'
    },
    buttonContainer: {
        marginTop: 16,
        width: 300,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00b3e3'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff'
    }
});


export default React.createClass({
    propTypes: {
        onSubmitHandler: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            publisher_id: '',
            username: '',
            password: ''
        };
    },
    render: function() {
        return View({style: styles.container},
            View({style: styles.header},
                Image({
                    style: styles.mark,
                    source: {
                        uri: 'http://i.imgur.com/da4G0Io.png'
                    }
                })
            ),
            View({style: styles.body},
                View({style: styles.inputFields},
                    Text({style: styles.label}, 'PUBLISHER ID'),
                    View({style: styles.inputFieldContainer},
                        TextInput({
                            autoCapitalize: 'none',
                            autoCorrect: false,
                            keyboardType: 'number-pad',
                            style: styles.input,
                            value: this.state.publisher_id,
                            onChangeText: value => this.setState({publisher_id: value})
                        }),
                    )
                ),
                View({style: styles.inputFields},
                    Text({style: styles.label}, 'USERNAME'),
                    View({style: styles.inputFieldContainer},
                        TextInput({
                            autoCapitalize: 'none',
                            autoCorrect: false,
                            style: styles.input,
                            value: this.state.username,
                            onChangeText: value => this.setState({username: value})
                        }),
                    )
                ),
                View({style: styles.inputFields},
                    Text({style: styles.label}, 'PASSWORD'),
                    View({style: styles.inputFieldContainer},
                        TextInput({
                            autoCapitalize: 'none',
                            autoCorrect: false,
                            secureTextEntry: true,
                            style: styles.input,
                            value: this.state.password,
                            onChangeText: value => this.setState({password: value})
                        }),
                    )
                ),
                View({style: styles.inputFields},
                    TouchableOpacity({
                        style: styles.buttonContainer,
                        onPress: () => this.props.onSubmitHandler(
                            this.state.publisher_id,
                            this.state.username,
                            this.state.password
                        )
                    }, Text({style: styles.buttonText}, 'Sign In'))
                )
            )
        );
    }
});
