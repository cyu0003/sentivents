import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

import * as dbMethods from '../dbMethods';
import ButtonContainer from '../components/ButtonContainer';
import Button from '../components/Button';
import TimeSummary from '../components/TimeSummary';

import { globalStyles } from '../styles/global';

import TabNavigation from '../components/TabNavigation'

export default class HomeScreen extends Component {
    constructor() {
        super();

        this.state = {
            emoji1: '',
            emoji2: '',
            emoji3: '',
            emoji4: '',
            emoji5: '',
            cv1: '',
            cv2: '',
            cv3: '',
            cv4: '',
            cv5: '',
        };

        this.onPress = this.onPress.bind(this);
        this.update = this.update.bind(this);
    }

    async componentDidMount() {
        console.log('hi')
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        let dates = [];

        for (let i = 0; i < 7; i++) {
            date -= 1;
            const currDate = year + '-' + month + '-' + date;

            dates[i] = currDate;
        }

        let data = [];

        for (let i = 0; i < dates.length; i++) {
            data[i] = await dbMethods.getMessages(dates[i]);
        }
    }

    onPress() {
        this.props.navigation.navigate('Edit')
    }

    update() {
        this.componentDidMount();
    }

    render() {
        return(
            <ScrollView contentContainerStyle={globalStyles.main}>
                <TimeSummary/>
                <View style={globalStyles.buttonContainer}>
                    <Button
                        buttonText='New Entry'
                        onPress={this.onPress}
                        type={2}
                    />
                    <Button
                        buttonText='Refresh'
                        onPress={this.update}
                        type={2}
                    />
                </View>
            </ScrollView>
        );
    }
}
