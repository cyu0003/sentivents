import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Button from '../components/Button';
import { globalStyles } from '../styles/global';

export default class EditScreen extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
        };

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        console.log(this.state.text);
        this.props.navigation.navigate('Stats');
    }

    render() {
        return (
            <ScrollView>
                <TextInput
                    autoFocus={true}
                    maxLength={1000}
                    multiline={true}
                    numberOfLines={5}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text: text })}
                    style={globalStyles.textBox}
                />
                <Button buttonPress={this.onPress} buttonText='Show summary'/>
            </ScrollView>
        );
    }
}