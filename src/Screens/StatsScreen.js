import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

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
            </ScrollView>
        );
    }
}