import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, StatusBar} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
// import RegisterScreen from './screens/RegisterScreen';
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
  Profile:{
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({tintColor}) => (
        <Image style={{marginTop: 17, height:26, width:26}} source={require('../img/user.png')} />
        )
    }
  }
});

