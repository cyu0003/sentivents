import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Button from '../components/Button'

export default class StatsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.route.params.data,
        };
    }

    render() {
        return (
            <ScrollView>
                <Text>{this.state.data}</Text>
            </ScrollView>
        );
    }
}