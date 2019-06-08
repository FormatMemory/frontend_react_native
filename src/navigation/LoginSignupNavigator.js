import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import LoginSignupScreen from '../screens/LoginSignupScreen/LoginSignupScreen';

export const LoginNavigator = createStackNavigator({
    LoginSignup: {
        screen: LoginSignupScreen,
        navigationOptions: {
            title: "Login & Signup"
        }
    }
})
