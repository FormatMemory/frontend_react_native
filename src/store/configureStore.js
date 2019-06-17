import {createStore, combineReducers, applyMiddleware} from 'redux';
import postsReducer from './reducers/posts';
import loadReducer from './reducers/load';
import errorReducer from './reducers/error';
import logger from '../middleware/logger';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    isLoading: loadReducer,
    isError: errorReducer,
    errorMessgae: errorReducer,
    posts: postsReducer,
    auth: authReducer,
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(logger));
}

export default configureStore;