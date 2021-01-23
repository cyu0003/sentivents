import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import TextBox from '../components/TextBox';
import Button from '../components/Button';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
        };

        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(newText) {
        this.setState({ text: newText });
        //db.newMessage(newText);
    }

    render() {
        return (
            <View style={ globalStyles.main }>
                <Text>HomeScreen lmao</Text>
                <TextBox
                    onChange={this.onTextChange}
                />
                <Text>Input text is {this.state.text}</Text>
                <Button />
            </View>
        );
    }
}