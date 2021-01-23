import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

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
            <View style={ globalStyles.main }>
                <Text>HomeScreen lmao</Text>
                <TextBox text={this.state.text} onChange={this.onTextChange} style={globalStyles.textBox}/>
                <Text>{this.state.text}</Text>
            </View>
        );
    }
}