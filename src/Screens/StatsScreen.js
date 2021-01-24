import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import DaySummary from "../components/DaySummary"
import Button from '../components/Button'
import { globalStyles } from '../styles/global';

export default class StatsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.route.params.data,
        };

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        /* insert data into database */
        /* maybe add a confirmation alert? */
        
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <ScrollView>
                <Text>Filler Text</Text>
                <DaySummary/>
                <Text>{this.state.data}</Text>
                <Button onPress={this.onPress} buttonText='Submit' />
            </ScrollView>
        );
    }
}