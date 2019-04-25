import { KeepAwake, registerRootComponent } from 'expo';
import App from 'App';
import allReducers from './src/store/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

if (__DEV__) {
  KeepAwake.activate();
}

const store = createStore(allReducers);

// registerRootComponent(App);

render() { return(
    <Provider store= {store}>
      <App />
    </Provider>
  );
}