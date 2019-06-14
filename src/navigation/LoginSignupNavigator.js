import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginSignupScreen from '../screens/LoginSignupScreen/LoginSignupScreen';

export default LoginNavigator = createStackNavigator({
    LoginSignup: LoginSignupScreen,
});
       
LoginNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    //title: "Login & Signup"
};