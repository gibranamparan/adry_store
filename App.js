import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import HomeScreen from './HomeScreen'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <HomeScreen />
    );
  }
}
