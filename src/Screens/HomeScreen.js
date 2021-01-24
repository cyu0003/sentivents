import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

import * as dbMethods from '../dbMethods';
import Button from '../components/Button';
import TimeSummary from '../components/TimeSummary';

import { globalStyles } from '../styles/global';

import TabNavigation from '../components/TabNavigation'

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
        this.clearDB = this.clearDB.bind(this);
    }

    async componentDidMount() {
        console.log('mount');

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        let dates = [];

        for (let i = 0; i < 7; i++) {
            date -= 1;
            const currDate = year + '-' + month + '-' + date;

            dates[i] = currDate;
        }

        let data = [];

        for (let i = 0; i < dates.length; i++) {
            data[i] = await dbMethods.getMessages(dates[i]);
        }

        console.log(data);
    }

    onPress() {
        this.props.navigation.navigate('Edit')
    }

    onPress2() {
        this.props.navigation.navigate('Calendar')
    }

    clearDB() {
        let db = SQLite.openDatabase('UserDatabase.db');

        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM messages'
            )
        });

        console.log('Database cleared!');
    }

    render() {
        return(
            <ScrollView contentContainerStyle={globalStyles.main}>
                <TimeSummary/>
                <Button
                    buttonText='Do not press unless you are Chris lmao'
                    onPress={this.clearDB}
                />
                <TabNavigation 
                    buttonText='Home'
                    buttonText2='Calendar'
                    onPress={this.onPress}
                    onPress2={this.onPress2}
                />
            </ScrollView>
        );
    }
}
