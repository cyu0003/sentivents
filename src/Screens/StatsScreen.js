import React, { Component } from "react";
import { Alert, ScrollView } from "react-native";
import * as dbMethods from "../dbMethods";

import DaySummary from "../components/DaySummary";
import Button from "../components/Button";

import { globalStyles } from "../styles/global";

export default class StatsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      data: this.props.route.params.data,
      text: this.props.route.params.text,
    };

    this.onPress = this.onPress.bind(this);
  }

    componentDidMount() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        const currDate = year + '-' + month + '-' + date;

        this.setState({ date: currDate });
        this.setState({
            data: this.props.route.params.data,
            text: this.props.route.params.text,
        });
    }

  onPress() {
    dbMethods.insertMessage(this.state.text, this.state.date, this.state.data.emoji[0][0][0], this.state.data.emoji[0][1][0], this.state.data.emoji[0][2][0], this.state.data.emoji[0][3][0], this.state.data.emoji[0][4][0], this.state.data.emoji[0][0][1], this.state.data.emoji[0][1][1], this.state.data.emoji[0][2][1], this.state.data.emoji[0][3][1], this.state.data.emoji[0][4][1]);

    /* maybe add a confirmation alert? */
    Alert.alert(
        'Success',
        'Your entry has been submitted!',
        [
            {
                text: 'OK', onPress: () => this.props.navigation.navigate("Home")
            }
        ]
    )
  }

  render() {
    return (
      <ScrollView contentContainerStyle={globalStyles.main}>
        <DaySummary
          date={new Date()}
          emojies={[
            this.state.data.emoji[0][0][0],
            this.state.data.emoji[0][1][0],
            this.state.data.emoji[0][2][0],
            this.state.data.emoji[0][3][0],
            this.state.data.emoji[0][4][0],
          ]}
          confidences={[
            this.state.data.emoji[0][0][1],
            this.state.data.emoji[0][1][1],
            this.state.data.emoji[0][2][1],
            this.state.data.emoji[0][3][1],
            this.state.data.emoji[0][4][1],
          ]}
        />
        {/* <Text>{JSON.stringify(this.state.data)}</Text> */}
        <Button onPress={this.onPress} buttonText="Submit" />
      </ScrollView>
    );
  }
}
