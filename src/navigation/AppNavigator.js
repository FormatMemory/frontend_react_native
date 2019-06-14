import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginSignupNavigator';


isLoggedIn = () => {
  //TODO: check auth
  if(true){
    return false;
  }else{
    return true;
  }
}
export default createAppContainer(createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      {
        Main: MainTabNavigator,
        LoginSignupNavigator: LoginNavigator
      },
      {
        initialRouteName: isLoggedIn() ? "Main" : "LoginSignupNavigator"
      }
  )
);

// export default createAppContainer(makeRootNavigator(false))