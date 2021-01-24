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
        this.getData = this.getData.bind(this);
    }

    async getData() {
        const response = await fetch('http://34.121.2.138:8080/emote?sentences=[\"' + this.state.text + '\"]', {
           method: 'GET'
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    onPress() {
        console.log(this.state.text);
        this.getData().then((data) => this.props.navigation.navigate('Stats', { data: data }));
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
                <Button onPress={this.onPress} buttonText='Show summary'/>
            </ScrollView>
        );
    }
}