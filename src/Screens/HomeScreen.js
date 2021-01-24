import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Button from '../components/Button';
import Calendar from '../components/Calendar';

import { globalStyles } from '../styles/global'

export default class HomeScreen extends Component {
    constructor() {
        super();

        this.onPress = this.onPress.bind(this);
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
                    buttonPress={this.onPress}
                />
            </ScrollView>
        );
    }
}