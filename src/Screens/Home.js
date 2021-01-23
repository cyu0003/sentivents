import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import TextBox from '../components/TextBox';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: "hello",
        }

        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(newText) {
        this.setState({ text: newText })
    }

    render () {
        return (
            <View>
                <Text>HomeScreen lmao</Text>
                <TextBox text={this.state.text} onChange={this.onTextChange}/>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}