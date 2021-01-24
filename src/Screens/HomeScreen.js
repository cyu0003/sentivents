import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Button from '../components/Button';
import Calendar from '../components/Calendar';

import { globalStyles } from '../styles/global'

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
    }

    componentDidMount() {
        let db = SQLite.openDatabase('UserDatabase.db');

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * from messages',
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    console.log(len);

                    if (len > 0) {
                        this.setState({ data: JSON.stringify(results) });
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

    render() {
        return(
            <ScrollView contentContainerStyle={globalStyles.main}>
                <Calendar />
                <Button
                    buttonText='Create New Log'
                    onPress={this.onPress}
                />
            </ScrollView>
        );
    }
}