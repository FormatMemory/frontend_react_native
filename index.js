import { KeepAwake, registerRootComponent } from 'expo';
import App from 'App';
import allReducers from './src/store/reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

if (__DEV__) {
  KeepAwake.activate();
}

const store = createStore(allReducers, applyMiddleware(thunk));

class DealApp extends React.Component{
    render() {
        return(
            <Provider store= {store}>
            <App />
            </Provider>
        );
    }
}

registerRootComponent(DealApp);
