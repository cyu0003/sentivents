import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

import Button from '../components/Button';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        };

        this.newSubmission = this.newSubmission.bind(this);
        this.buttonPress = this.buttonPress.bind(this);
    }

    newSubmission(newText) {
        this.setState({ text: newText });
    }

    buttonPress() {
        console.log(this.state.text);
        //db.newMessage(newText);
    }

    render() {
        return (
            <View style={ globalStyles.main }>
                <Text>HomeScreen lmao</Text>
                <TextInput
                    maxLength={1000}
                    placeholder='What do you want to vent about?'
                    value={this.state.text}
                    onChangeText={(text) => this.newSubmission(text)} 
                    style={globalStyles.textBox}
                />
                <Text>{this.state.text}</Text>
                <Button buttonPress={this.buttonPress}/>
            </View>
        );
    }
}