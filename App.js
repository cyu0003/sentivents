import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import * as SQLite from 'expo-sqlite';
import AppLoading from 'expo-app-loading';

import * as dbMethods from './src/dbMethods'
import StackNavigator from './src/StackNavigator';

//import { globalStyles } from './src/styles/global'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            firstLoad: true,
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
        });

        this.populateDB(db);
	}
	
	async populateDB(db) {
        console.log('populate');
		var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
		
		const stringArray = ['I feel great today!', 'Today was not a good day for me.', 'I hung out with my friends today!', 'I got a bad grade on my test today.', 'My dog died today.'];

        for (let i = 0; i < stringArray.length; i++) {
			const response = await fetch('http://34.121.2.138:8080/emote?sentences=[\"' + stringArray[i] + '\"]', {
        		method: 'GET'
        	});
            const data = await response.json();

            date--;
            const currDate = year + '-' + month + '-' + date;

            console.log(currDate)
			
			dbMethods.insertMessage([stringArray[i], currDate, data.emoji[0][0][0], data.emoji[0][1][0], data.emoji[0][2][0], data.emoji[0][3][0], data.emoji[0][4][0], data.emoji[0][0][1], data.emoji[0][1][1], data.emoji[0][2][1], data.emoji[0][3][1], data.emoji[0][4][1]]);
        }
        console.log(db);
	}


    render() {
        if (this.state.isReady) {
            return (
                <StackNavigator />
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
