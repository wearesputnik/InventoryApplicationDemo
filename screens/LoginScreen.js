import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, StatusBar} from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var FloatingLabel = require('react-native-floating-labels');

type Props = {};
class LoginScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.containerMain}>
      <KeyboardAwareScrollView>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.topBtnContainer}>

          <TouchableHighlight
            style={[styles.regBtnStyle, {width:106, height:30}]}
            onPress={()=>this.props.navigation.navigate('Register')}>
              <Text style={styles.topBtnTextStyle}>Регистрация</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.logBtnStyle, {width:59, height:30}]}
            onPress={this.onPressLogin}>
              <Text style={[styles.topBtnTextStyle, {color: '#616161'}]}>Вход</Text>
          </TouchableHighlight>

        </View>
        <View style={styles.containerCenter}>
          <Image
            style={{width: 167, height: 152}}
            source={require('../img/logo.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}>
              e-mail</FloatingLabel>

          <FloatingLabel
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            secureTextEntry={true}>
              Пароль</FloatingLabel>

          <Text style={{color: '#42BCF8', fontSize: 16, marginLeft: 9, marginTop: 28}}>Забыли пароль ?</Text>
        </View>
        <View style={{marginTop: 80, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight
            style={[styles.bottomBtnStyle]}
            onPress={()=> this.props.navigation.navigate('TabPage')}>
              <Text style={styles.bottomBtnTextStyle}>Войти</Text>
          </TouchableHighlight>
        </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 41
  },
  containerMain: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    paddingTop: 20
  },  
  topBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20
  },
  logBtnStyle: {
    justifyContent: 'center', 
    alignItems: 'center'  
  },
  regBtnStyle: {
    backgroundColor: 'black',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#35CEF1',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  topBtnTextStyle: {
    color: '#42BCF8',
    fontSize: 14
    // textAlign:'center'
  },
  labelInput: {
    color: '#616161',
    // fontSize: 18
  },
  input: {
    borderWidth: 0,
    color: 'white',
    fontSize: 18
    // marginTop: 10
  },
  bottomBtnStyle: {
    borderRadius: 7,
    backgroundColor: '#35CEF1',
    height: 54,
    width: 315,
    justifyContent: 'center', 
    alignItems: 'center',
    // marginLeft: 30,
    // marginRight: 30
  },
  bottomBtnTextStyle: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'normal'
    // textAlign:'center'
  },
  inputContainer: {
    marginTop: 48,
    marginLeft: 30,
    marginRight: 30
  },

});
