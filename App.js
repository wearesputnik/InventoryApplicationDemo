import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import BottomTabNavigatorPage from './screens/BottomTabNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  TabPage:{
    screen:BottomTabNavigatorPage,
    navigationOptions: {
      header: null
    }
  }
})

