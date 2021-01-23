import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite';

import AppLoading from 'expo-app-loading';

import Navigator from './src/Screens/Navigator';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isReady: false,
		}
	}

	async asyncSetUp() {
		var db = SQLite.openDatabase({ name: 'UserDatabse.db' });

		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS messages (msg TEXT, date TEXT, emoji1 TEXT, emoji2 TEXT, emoji3 TEXT, emoji4 TEXT, emoji5 TEXT, cv1 REAL, cv2 REAL, cv3 REAL, cv4 REAL, cv5 REAL)'
			)
		})
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