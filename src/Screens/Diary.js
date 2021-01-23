import React, { Component } from 'react';
import { Text, View } from 'react-native';

import * as SQLite from 'expo-sqlite';
import { globalStyles } from '../styles/global';

export default class Diary extends Component {
    constructor() {
        super();

        this.state ={
            data: [],
        };
    }

    componentDidMount() {
        console.log('tried to open db')
        let db = SQLite.openDatabase({ name: 'UserDatabase.db' });
        console.log(db)
        
        db.transaction((tx) => {
            'SELECT * from messages',
        (tx, results) => {
            var len = results.rows.length;
            console.log(len);

            if (len > 0) {
                this.setState({ data: results})
            } else {
                alert('no messages');
            }
        }
        });
        console.log('mounted');
    }



    render() {
        return (
            <View style={globalStyles.main}>
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}