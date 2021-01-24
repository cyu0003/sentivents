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
            data: [],
        };

        this.onPress = this.onPress.bind(this);
        this.update = this.update.bind(this);
    }

    async componentDidMount() {
        console.log('mounted home')
        var date = new Date().getDate()+1;
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        let dates = [];

        for (let i = 0; i < 7; i++) {
            date -= 1;
            const currDate = year + '-' + month + '-' + date;
            dates[i] = currDate;
            console.log(dates[i])
        }

        let data = [];

        for (let i = 0; i < dates.length; i++) {
            data[i] = await dbMethods.getMessages(dates[i]);
        }

        this.setState({ data: data });
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
                <TimeSummary data={this.state.data} />
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
