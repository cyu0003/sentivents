import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

import Button from '../components/Button';
import Calendar from './Calendar';

import { globalStyles } from '../styles/global';

export default class HomeScreen extends Component {
    constructor() {
        super();

        this.state = {
            emoji1: '',
            emoji2: '',
            emoji3: '',
            emoji4: '',
            emoji5: '',
            cv1: '',
            cv2: '',
            cv3: '',
            cv4: '',
            cv5: '',
        };

        this.onPress = this.onPress.bind(this);
        this.onPress2 = this.onPress2.bind(this);
    }

    componentDidMount() {
        let db = SQLite.openDatabase('UserDatabase.db');

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * from messages',
                [],
                (tx, results) => {
                    var data = results.rows.array;
                    var len = results.rows.length;
                    console.log(results.rows.array);
                    console.log(len);

                    if (len > 0) {
                        this.setState({ data: data[0] }); /* this is the first row returned by the database */
                    } else {
                        this.setState({ data: ["uhhhhh there's nothing lmao"] });
                        alert('no messages');
                    }
                },
                (tx, err) => {
                    console.log(err);
                }
            )
        });
    }

    onPress() {
        this.props.navigation.navigate('Edit')
    }

    onPress2() {
        this.props.navigation.navigate('Calendar')
    }

    render() {
        return(
            <ScrollView contentContainerStyle={globalStyles.main}>
                <Button
                    buttonText='Create New Log'
                    onPress={this.onPress}
                />
                <Button
                    buttonText='View Calendar'
                    onPress={this.onPress2}
                />
            </ScrollView>
        );
    }
}
