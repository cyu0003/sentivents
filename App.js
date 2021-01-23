import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

//import AppLoading from 'expo-app-loading';

import Navigator from './src/Screens/Navigator';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isReady: true,
		}
	}

	render() {
		if (this.state.isReady) {
			return (
				<Navigator />
			);
		}
	}
}