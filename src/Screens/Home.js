import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default class Home extends Component {
    render () {
        return (
            <View style={globalStyles.container}>
                <Text >HomeScreen lmao</Text>
            </View>
        );
    }
}