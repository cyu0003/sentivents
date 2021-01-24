import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Button from '../components/Button';
import { globalStyles } from '../styles/global';

const CardContainer=({children, style})=>{
    return <View style={{
      ...globalStyles.tertiary,
      ...style
    }}>
      {children}
    </View>
  }

export default class EditScreen extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            data: '',
        };

        this.onPress = this.onPress.bind(this);
        this.getData = this.getData.bind(this);
    }

    async getData() {
        const response = await fetch('http://34.121.2.138:8080/emote?sentences=[\"' + this.state.text + '\"]', {
           method: 'GET'
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    onPress() {
        console.log(this.state.text);
        this.getData().then((data) =>
            this.setState({ data: data },
                          () => this.props.navigation.navigate('Stats', { data: this.state.data, text: this.state.text }))
        );
    }

    render() {
        return (
            <ScrollView contentContainerStyle={globalStyles.main}>
                <CardContainer>
                <TextInput
                    autoFocus={true}
                    maxLength={1000}
                    multiline={true}
                    numberOfLines={5}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text: text })}
                    style={globalStyles.textBox}
                    textAlignVertical={'top'}
                    placeholder={'What do you want to vent about?'}
                    placeholderTextColor={'#969696'}
                />
                </CardContainer>
                <Button onPress={this.onPress} buttonText='Show summary'/>
            </ScrollView>
        );
    }
}
