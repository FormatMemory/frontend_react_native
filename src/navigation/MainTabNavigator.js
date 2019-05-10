import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon/TabBarIcon';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import PostDetailScreen from '../screens/HomeScreen/PostDetailScreen';
import CommentsScreen from '../screens/HomeScreen/CommentsScreen';
import DealWebScreen from '../screens/HomeScreen/DealWebScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: PostDetailScreen,
  Comments: CommentsScreen,
  DealWeb: DealWebScreen
},
{
  initialRouteName: 'Home',
}
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0 ){
    tabBarVisible  = false;
  }
  return {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
    tabBarVisible,
  };
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const AccountStack = createStackNavigator({
  Account: AccountScreen,
});

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-happy' : 'md-happy'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  // LinksStack,
  // SettingsStack,
  AccountStack,
});
