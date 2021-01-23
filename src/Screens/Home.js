import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import * as SQLite from 'expo-sqlite';

import Button from '../components/Button';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            data: '',
            date:'',
        };

        this.newSubmission = this.newSubmission.bind(this);
        this.buttonPress = this.buttonPress.bind(this);
    }

    componentDidMount() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        const currDate = date + '-' + month + '-' + year;//format: dd-mm-yyyy;

        this.setState({ date: currDate });
    }

    newSubmission(newText) {
        this.setState({ text: newText });
    }

    buttonPress() {
        console.log(this.state.text);
        console.log(this.state.date);

        fetch('http://34.121.2.138:8080/emote?sentences=[\"' + this.state.text + '\"]', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson);
            this.setState({
               data: responseJson
            })

           console.log(this.state.data.emoji[0][0][0]);
        })
        .catch((error) => {
           console.error(error);
        });

        console.log('time to try database functionality');

        var db = SQLite.openDatabase({ name: 'UserDatabase.db' });

        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO messages (msg, date, emoji1, emoji2, emoji3, emoji4, emoji5, cv1, cv2, cv3, cv4, cv5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [this.state.text, this.state.date, this.state.data.emoji[0][0][0], this.state.data.emoji[0][1][0], this.state.data.emoji[0][2][0], this.state.data.emoji[0][3][0], this.state.data.emoji[0][4][0], this.state.data.emoji[0][0][1], this.state.data.emoji[0][1][1], this.state.data.emoji[0][2][1], this.state.data.emoji[0][3][1], this.state.data.emoji[0][4][1]],
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
                    } else alert('failed lmao');
                }
            )
        });
        
        console.log('end of query');

        this.setState({ text: null });
    }

    submitButton() {
        
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