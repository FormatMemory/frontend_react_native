import { KeepAwake, registerRootComponent,  registerComponent} from 'expo';
import App from './App';
import React from 'react';
import { Navigation } from 'react-navigation';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PostDetailScreen from './src/screens/HomeScreen/PostDetailScreen';

if (__DEV__) {
  KeepAwake.activate();
}

const store = configureStore();

const DealAppRedux = () => (
    <Provider store= {store}>
        <App/>
    </Provider>
);
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default class DealApp extends React.Component{
//     render() {
//         return(

//         );
//     }
// }

registerRootComponent(DealAppRedux);

// Navigation.registerComponent(
//   "Home",
//   () => HomeScreen,
//   store,
//   Provider
// );

// Navigation.registerComponent(
//   "Account",
//   () => AccountScreen,
//   store,
//   Provider
// );

// Navigation.registerComponent(
//   "PostDetail",
//   () => PostDetailScreen,
//   store,
//   Provider
// );


//DealApp;