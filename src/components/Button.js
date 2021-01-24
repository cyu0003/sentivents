import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { globalStyles } from '../styles/global';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.type == 2) {
            return(
                <TouchableOpacity
                onPress={() => this.props.onPress()}
                style={globalStyles.button2}
            >
                <Text style={{color: '#f0f0f0'}}>{this.props.buttonText}</Text>
            </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => this.props.onPress()}
                style={globalStyles.button}
            >
                <Text style={{color: '#f0f0f0'}}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    }
}