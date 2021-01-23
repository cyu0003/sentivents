import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

import Button from '../components/Button';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            data: '',
        };

        this.newSubmission = this.newSubmission.bind(this);
        this.buttonPress = this.buttonPress.bind(this);
    }

    newSubmission(newText) {
        this.setState({ text: newText });
    }

    buttonPress() {
        console.log(this.state.text);

        fetch('http://34.121.2.138:8080/emote?sentences=[\"' + this.state.text + '\"]', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           //console.log(responseJson);
           this.setState({
              data: responseJson
           })

           console.log(this.state.data.emoji[0][0][0]);
        })
        .catch((error) => {
           console.error(error);
        });
        
        this.setState({ text: null });
        //db.newMessage(newText);
    }

    render() {
        return (
            <View style={ globalStyles.main }>
                <Text>HomeScreen lmao</Text>
                <TextInput
                    maxLength={1000}
                    placeholder='What do you want to vent about?'
                    value={this.state.text}
                    onChangeText={(text) => this.newSubmission(text)} 
                    style={globalStyles.textBox}
                />
                <Text>{this.state.text}</Text>
                <Button buttonPress={this.buttonPress}/>
            </View>
            
        );
    }
}