import React, { Component } from 'react';
import { Text, View } from 'react-native';

import * as SQLite from 'expo-sqlite';
import { globalStyles } from '../styles/global';

export default class Diary extends Component {
    constructor() {
        super();

        this.state ={
            data: ["something should go here, right?"]
        };
    }

    getData() {
        console.log('tried to open db')

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

        console.log('mounted');
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View style={globalStyles.main}>
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}
