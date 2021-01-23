import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import * as SQLite from 'expo-sqlite';

import Button from '../components/Button';
import Input from '../components/Input';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            data: '',
        };

        this.newSubmission = this.newSubmission.bind(this);
        this.buttonPress = this.buttonPress.bind(this);
    }

    newSubmission(newText) {
        this.setState({ text: newText });
    }

    buttonPress() {
        console.log(this.state.text);

        fetch('http://34.121.2.138:8080/emote?sentences=[\"' + this.state.text + '\"]', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson);
            this.setState({
               data: responseJson
            })

           console.log(this.state.data.emoji);
        })
        .catch((error) => {
           console.error(error);
        });
        
        this.setState({ text: null });
        //db.newMessage(newText);
    }

    submitButton() {
        var db = SQLite.openDatabase({ name: 'UserDatabase.db' });

        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO messages (msg, date, emoji1, emoji2, emoji3, emoji4, emoji5, cv1, cv2, cv3, cv4, cv5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [/* insert values pulled from {data} here */],
                (tx, results) => {
                    console.log('results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            [
                                {
                                    text: 'ok',
                                },
                            ],
                            { cancelable: true }
                        )
                    }
                }
            )
        });
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