import { KeepAwake, registerRootComponent } from 'expo';
import App from './App';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

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

//DealApp;