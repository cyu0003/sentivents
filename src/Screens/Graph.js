import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import {MonthCalendarGraph, RecentDaysCalendarGraph, YearCalendarGraph} from '../components/CalendarGraph'

export default class Graph extends Component {
    render () {
        return (
            <ScrollView>
                <Text>This is where a graph goes</Text>
                <MonthCalendarGraph year={2021} month={0}/>
                <RecentDaysCalendarGraph days={69}/>
                <YearCalendarGraph year={2021}/>
            </ScrollView>
        );
    }
}