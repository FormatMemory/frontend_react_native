import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigator from './LoginSignupNavigator';
import { connect } from 'react-redux';
import { updateToken } from '../store/actions/auth';
//import { authUser } from '../service/Auth/AuthService';

authUser = () => {
  if(Math.random() > 0.3){
    return true
  }else{
    return false
  }
}

isLoggedIn = () => {
  //TODO: check auth
  if(authUser()){
    return true;
  }else{
    return false;
  }
}
const AppNavigator = createAppContainer(createSwitchNavigator(
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
const mapStateToProps = state => {
  return {
      token: state.auth.token
  };
};


export default connect(mapStateToProps)(AppNavigator);