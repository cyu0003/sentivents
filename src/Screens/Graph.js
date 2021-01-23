import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { CalendarGraph } from '../components/CalendarGraph'

export default class Graph extends Component {
    render () {
        return (
            <View>
                <Text>This is where a graph goes</Text>
                <CalendarGraph/>
            </View>
        );
    }
}