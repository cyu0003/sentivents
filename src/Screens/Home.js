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
<<<<<<< HEAD
            <View style={globalStyles.container}>
                <Text >HomeScreen lmao</Text>
=======
            <View>
                <Text>HomeScreen lmao</Text>
                <TextBox text={this.state.text} onChange={this.onTextChange}/>
                <Text>{this.state.text}</Text>
>>>>>>> 7d9db5012665a63649182323675a395732677c6b
            </View>
        );
    }
}