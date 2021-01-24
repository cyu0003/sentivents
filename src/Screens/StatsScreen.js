import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import * as SQLite from 'expo-sqlite';
import DaySummary from '../components/DaySummary';
import Button from '../components/Button';

import { globalStyles } from '../styles/global';

export default class StatsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            data: this.props.route.params.data,
            text: this.props.route.params.text,
        };

        this.onPress = this.onPress.bind(this);
    }

    componentDidMount() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        const currDate = date + '-' + month + '-' + year;

        this.setState({ date: currDate });
        this.setState({ data: this.props.route.params.data,
            text: this.props.route.params.text })
    }

    onPress() {

        var db = SQLite.openDatabase('UserDatabase.db');

        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO messages (msg, date, emoji1, emoji2, emoji3, emoji4, emoji5, cv1, cv2, cv3, cv4, cv5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [this.state.text, this.state.date, this.state.data.emoji[0][0][0], this.state.data.emoji[0][1][0], this.state.data.emoji[0][2][0], this.state.data.emoji[0][3][0], this.state.data.emoji[0][4][0], this.state.data.emoji[0][0][1], this.state.data.emoji[0][1][1], this.state.data.emoji[0][2][1], this.state.data.emoji[0][3][1], this.state.data.emoji[0][4][1]],
                null,
                (tx, err) => {
                    console.log(err);
                }
            )
        },
        (err) => {
            console.log(err);
        },
        null);

        /* maybe add a confirmation alert? */
        
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ScrollView contentContainerStyle={globalStyles.main}>
                <DaySummary/>
                <Text>{JSON.stringify(this.state.data)}</Text>
                <Button onPress={this.onPress} buttonText='Submit' />
            </ScrollView>
        );
    }
}