import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, StatusBar} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import EmptyPage from './EmptyPage';
import ProfilePage from './ProfilePage';


// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <AppStackNavigator />
//     );
//   }
// }

export default createBottomTabNavigator({
  Items:{
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({tintColor}) => (
        <Image style={{marginTop: 17, height:25, width:25}} source={require('../img/Items.png')} />
        )
    }
  },
  Location:{
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({tintColor}) => (
        <Image style={{marginTop: 17, height:25, width:25}} source={require('../img/Location.png')} />
        )
    }
  },
  Logo:{
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({tintColor}) => (
        <Image style={{marginTop: 17, height:50, width:50}} source={require('../img/logoBar.png')} />
        )
    }
  },
  People:{
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({tintColor}) => (
        <Image style={{marginTop: 17, height:25, width:25}} source={require('../img/People.png')} />
        )
    }
  },
  Profile:{
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({tintColor}) => (
        <Image style={{marginTop: 17, height:25, width:25}} source={require('../img/user.png')} />
        )
    }
  }
});

