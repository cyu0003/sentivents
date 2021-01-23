import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';

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
                placeholder={this.state.text}
                onChangeText={(text) => this.props.onChange(text)}
            />
        );
    }
}