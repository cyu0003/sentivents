import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import DaySummary from "../components/DaySummary"
import Button from '../components/Button'
import { globalStyles } from '../styles/global';

export default class StatsScreen extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <ScrollView>
                <Text>Filler Text</Text>
                <DaySummary/>
            </ScrollView>
        );
    }
}