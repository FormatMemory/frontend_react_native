import { KeepAwake, registerRootComponent } from 'expo';
import App from 'App';
import allReducers from './src/store/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

if (__DEV__) {
  KeepAwake.activate();
}

const store = createStore(allReducers);

class App extends React.Component{
    render() {
        return(
            <Provider store= {store}>
            <App />
            </Provider>
        );
    }
}

registerRootComponent(App);
