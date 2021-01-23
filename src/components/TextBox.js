import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';

import { globalStyles } from '../styles/global';

export default class TextBox extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: "Enter your quote of the day!",
        }
    }

    render () {
        return (
            <TextInput
                multiline
                numberOfLines={10}
                maxLength={1000}
                placeholder={this.state.text}
                onChangeText={(text) => this.props.onChange(text)} 
                style={globalStyles.textBox}
            />
        );
    }
}