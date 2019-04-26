import {createStore, combineReducers} from 'redux';
import postReducer from './reducers/post';
import loadReducer from './reducers/load';
import errorReducer from './reducers/error';

const rootReducer = combineReducers({
    posts: postReducer,
    isLoading: loadReducer,
    isError: errorReducer,
    errorMessgae: errorReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;