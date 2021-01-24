import React, { Component } from 'react';
import { View } from 'react-native';

import Button from './Button';

export default class ButtonContainer extends Component {
    render() {
        return (
            <View>
                <Button
                    buttonText={this.props.buttonText1}
                    onPress={this.props.onPress1}
                />
                <Button
                    buttonText={this.props.buttonText2}
                    onPress={this.props.onPress2}
                />
            </View>
        );
    }
}