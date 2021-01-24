import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import * as SQLite from 'expo-sqlite';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navigator from './src/Navigator';

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

    async componentDidMount() {
        await AsyncStorage.getItem('firstLoad', (err, result) => {
            if (err) {
            } else {
                if (result == null) {
                    console.log('null value');
                } else {
                    this.setState({ firstLoad: false })
                    console.log('non-null value');
                }
            }
        });
        
        if (this.state.firstLoad) {
            this.populateDB();
        }
    }

    async asyncSetUp() {
        var db = SQLite.openDatabase('UserDatabase.db');

        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS messages (msg TEXT, date TEXT, emoji1 TEXT, emoji2 TEXT, emoji3 TEXT, emoji4 TEXT, emoji5 TEXT, cv1 REAL, cv2 REAL, cv3 REAL, cv4 REAL, cv5 REAL)', [], null, null
            )
        });
	}
	
	async populateDB() {
        console.log('called populate');
		var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        const currDate = date + '-' + month + '-' + year;
		
		const stringArray = ['I feel great today!', 'Today was not a good day for me.', 'I hung out with my friends today!', 'I got a bad grade on my test today.', 'My dog died today.'];

        console.log('pt1')
		for (let i = 0; i < stringArray.length; i++) {
			const response = await fetch('http://34.121.2.138:8080/emote?sentences=[\"' + stringArray[i] + '\"]', {
        		method: 'GET'
        	});
			const data = await response.json();
			
			db.transaction((tx) => {
				tx.executeSql(
					'INSERT INTO messages (msg, date, emoji1, emoji2, emoji3, emoji4, emoji5, cv1, cv2, cv3, cv4, cv5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
					[stringArray[i], currDate, data.emoji[0][0][0], data.emoji[0][1][0], data.emoji[0][2][0], data.emoji[0][3][0], data.emoji[0][4][0], data.emoji[0][0][1], data.emoji[0][1][1], data.emoji[0][2][1], data.emoji[0][3][1], data.emoji[0][4][1]],
					null,
					(tx, err) => {
                        console.log('1')
						console.log(err);
					}
				)
			},
			(err) => {
                console.log('2')
				console.log(err);
			},
			null);
        }

        await AsyncStorage.setItem('firstLoad', JSON.stringify(false))
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
