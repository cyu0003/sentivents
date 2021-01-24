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
            data: '',
        };

        this.onPress = this.onPress.bind(this);
    }

    async getData() {
        await fetch('http://34.121.2.138:8080/emote?sentences=[\"' + this.state.text + '\"]', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
               data: responseJson
            })

        //    console.log('INSERT INTO messages (msg, date, emoji1, emoji2, emoji3, emoji4, emoji5, cv1, cv2, cv3, cv4, cv5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        //    [this.state.text, this.state.date, this.state.data.emoji[0][0][0], this.state.data.emoji[0][1][0], this.state.data.emoji[0][2][0], this.state.data.emoji[0][3][0], this.state.data.emoji[0][4][0], this.state.data.emoji[0][0][1], this.state.data.emoji[0][1][1], this.state.data.emoji[0][2][1], this.state.data.emoji[0][3][1], this.state.data.emoji[0][4][1]]);
        //    this.state.emojis = this.state.data.emoji[0][0][0] + this.state.data.emoji[0][1][0] + this.state.data.emoji[0][2][0] + this.state.data.emoji[0][3][0] + this.state.data.emoji[0][4][0];
        })
        .catch((error) => {
           console.error(error);
        });
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