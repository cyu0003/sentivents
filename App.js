import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import * as SQLite from 'expo-sqlite';

import AppLoading from 'expo-app-loading';

import Navigator from './src/Navigator';
import { TapGestureHandler } from 'react-native-gesture-handler';

//import { globalStyles } from './src/styles/global'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
		}
		
		this.asyncSetUp = this.asyncSetUp.bind(this);
		this.populateDB = this.populateDB.bind(this);
    }

    async asyncSetUp() {
        var db = SQLite.openDatabase('UserDatabase.db');

        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS messages (msg TEXT, date TEXT, emoji1 TEXT, emoji2 TEXT, emoji3 TEXT, emoji4 TEXT, emoji5 TEXT, cv1 REAL, cv2 REAL, cv3 REAL, cv4 REAL, cv5 REAL)', [], null, null
            )
		})
		
		populateDB();
	}
	
	populateDB() {
		const stringArray = [];
	}


    render() {
        if (this.state.isReady) {
            return (
                <Navigator />
            );
        } else {
            return (
                <AppLoading
                    startAsync={this.asyncSetUp}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
    }
}
