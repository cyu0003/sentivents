import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Button from '../components/Button';
import Calendar from '../components/Calendar';

export default class HomeScreen extends Component {
    constructor() {

    }

    render() {
        <ScrollView>
            <Calendar />
            <Button />
        </ScrollView>
    }
}