import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginSignupNavigator';

export default makeRootNavigator = (isLoggedIn=false) => {
  return createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      {
        Main: {
          screen: MainTabNavigator
        },
        LoginSignupNavigator: {
          screen: LoginNavigator
        }
      },
      {
        initialRouteName: isLoggedIn ? "Main" : "LoginSignupNavigator"
      }
  )
};

// export default createAppContainer(makeRootNavigator(false))