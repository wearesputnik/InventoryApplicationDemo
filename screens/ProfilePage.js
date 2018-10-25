import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, StatusBar} from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';
// import {FloatingLabel} from 'react-native-floating-labels';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var FloatingLabel = require('react-native-floating-labels');

type Props = {};
class ProfilePage extends Component<Props> {
  render() {
    return (
      <View style={styles.containerMain}>
      <KeyboardAwareScrollView>
        <Text style={styles.topText}>Профиль</Text>
        <View style={styles.containerCenter}>
          <Image style={styles.profileImage} source={require('../img/photo.png')}></Image>
        </View>

        <View style={{padding: 10}}>
          <View style={styles.backgroundInput}>
            <FloatingLabel 
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              value='sputnik'>
                Имя</FloatingLabel>
          </View>

          <View style={styles.backgroundInput}>
            <FloatingLabel 
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              value='wearesputnik@gmail.com'>
                e-mail</FloatingLabel>
          </View>

          <View style={styles.backgroundInput}>
            <FloatingLabel 
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              value='password'>
                Пароль</FloatingLabel>
          </View>

          <View style={styles.backgroundInput}>
            <FloatingLabel 
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              value='+7 (999) 343-43-22'>
                Телефон</FloatingLabel>
          </View>
        </View>

        <View style={{marginTop: 5, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableHighlight
              style={[styles.bottomBtnStyle]}
              onPress={this.registration}>
                <Text style={styles.bottomBtnTextStyle}>Ответственность: 23 предмета</Text>
            </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>             
      </View>
    );
  }
}
export default ProfilePage;

const styles = StyleSheet.create({
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23
  },
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 20
  },
  profileImage: {
   width:110,
   height:110,
   backgroundColor:'#fff',
   borderRadius:54
  },
  topText: {
    fontSize: 34,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 0,
    color: 'black',
    fontSize: 20,
    marginLeft: 15
  },
  labelInput: {
    color: '#B9B9B9',
    marginLeft: 15,
  },
  backgroundInput: {
    backgroundColor: '#FBFBFB',
    marginTop: 10,
    borderRadius: 7,
    height: 70
  },
  bottomBtnStyle: {
    borderRadius: 7,
    backgroundColor: '#35CEF1',
    height: 54,
    width: 315,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  bottomBtnTextStyle: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'normal'
    // textAlign:'center'
  }
});
