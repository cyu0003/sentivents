import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { globalStyles } from '../styles/global';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => console.log("button")}
                style={globalStyles.button}
            >
                <Text>Show quote</Text>
            </TouchableOpacity>
        );
    }
}