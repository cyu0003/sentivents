import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Input from '../components/Input';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
        }

        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange(newText) {
        this.setState({ text: newText });
    }

    render() {
        return (
            <View style={ globalStyles.main }>
                <Text>HomeScreen lmao</Text>
                <TextBox
                    text={this.state.text}
                    onChange={this.onTextChange}
                />
                <Button onPress={console.log("button")}/>
                <Input />
            </View>
            
        );
    }
}