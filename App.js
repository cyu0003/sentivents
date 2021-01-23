import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

//import AppLoading from 'expo-app-loading';

<<<<<<< HEAD


export default function App() {
  return (
    <Navigator /> 
  );
=======
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
>>>>>>> ddf030807923e6e4d0ef0d27329604d9a84f9ba4
}