import React, {Component} from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ActivityIndicator
} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebase} from '../../src/firebase/config'

export default class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    onFooterLinkPress = () => {
        this.props.navigation.navigate('Registration')
    }

    onLoginPress = () => {
        if(this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signin!')
          } else {
            this.setState({
              isLoading: true,
            })
            firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
              console.log(res)
              console.log('User logged-in successfully!')
              this.setState({
                isLoading: false,
                email: '', 
                password: ''
              })
              this.props.navigation.navigate('Root')
            })
            .catch(error => this.setState({ errorMessage: error.message }))
          }
    }

    render() {

        if (this.state.isLoading) {
            return (
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
                    <TouchableOpacity style={styles.button} onPress={() => this.onLoginPress()}>
                        <Text style={styles.buttonTitle}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Don't have an account?
                            <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>Sign up</Text>
                        </Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}