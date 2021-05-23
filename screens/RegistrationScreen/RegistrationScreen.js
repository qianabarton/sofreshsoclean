import React, {Component, useState} from 'react'
import {Image, Text, TextInput, TouchableOpacity, View, Button, Alert, ActivityIndicator } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebase} from '../../src/firebase/config';


export default class RegistrationScreen extends Component {

    constructor() {
        super();
        this.state = { 
          fullName: '',
          email: '', 
          password: '',
          isLoading: false
        }
      }

    onFooterLinkPress = () => {
        this.props.navigation.navigate('Login')
    }
    
      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
    
      onRegisterPress = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signup!')
        } else {
          this.setState({
            isLoading: true,
          })
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            res.user.updateProfile({
              fullName: this.state.fullName
            })
            console.log('User registered successfully!')
            this.setState({
              isLoading: false,
              fullName: '',
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Root')
          })
          .catch(error => this.setState({ errorMessage: error.message }))      
        }
      }

    render() {

        if(this.state.isLoading){
            return(
              <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
              </View>
            )
          }   

        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={{
                    flex: 1,
                    width: '100%'
                }}
                    keyboardShouldPersistTaps="always">
                    <Image style={styles.logo} source={require('../../assets/images/car.png')}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Full Name'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(val) => this.updateInputVal(val, 'fullName')}
                        value={this.state.fullName}
                        autoCapitalize="none"/>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                        value={this.state.email}
                        autoCapitalize="none"/>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Password'
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        value={this.state.password}
                        autoCapitalize="none"/>

                    <TouchableOpacity style={styles.button} onPress={() => this.onRegisterPress()}>
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Already got an account?
                            <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>Log in</Text>
                        </Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}