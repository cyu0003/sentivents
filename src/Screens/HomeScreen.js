import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

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

    componentDidMount() {
        console.log('mount')
        let db = SQLite.openDatabase('UserDatabase.db');

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * from messages',
                (tx, results) => {
                    var data = results.rows.array;
                    var len = results.rows.length;
                    //console.log(results.rows.array);
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
