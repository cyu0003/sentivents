import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';

import * as dbMethods from '../dbMethods';
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
    }

    async componentDidMount() {
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

    render() {
        return(
            <ScrollView contentContainerStyle={globalStyles.main}>
                <TimeSummary/>
                <Button
                    buttonText='New Entry'
                    onPress={this.onPress}
                />
            </ScrollView>
        );
    }
}
