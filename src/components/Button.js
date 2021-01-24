import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { globalStyles } from '../styles/global';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.buttonPress()}
                style={globalStyles.button}
            >
                <Text>{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    }
}