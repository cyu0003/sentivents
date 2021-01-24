import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { globalStyles } from '../styles/global';

export default class TabNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flexDirection:'row', bottom:0, left:0, width:'100%', height:'10%'}}>
                <TouchableOpacity
                    onPress={() => this.props.onPress()}
                    style={globalStyles.tabNavigation}
                >
                    <Text style={{color: '#f0f0f0'}}>one</Text>
                </TouchableOpacity>

                
                <TouchableOpacity
                    onPress={() => this.props.onPress2()}
                    style={globalStyles.tabNavigation}
                >
                    <Text style={{color: '#f0f0f0'}}>two</Text>
                </TouchableOpacity>
            </View>
        );
    }
}