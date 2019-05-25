import {createStore, combineReducers, applyMiddleware} from 'redux';
import postListReducer from './reducers/postList';
import loadReducer from './reducers/load';
import errorReducer from './reducers/error';
import logger from '../middleware/logger';

const rootReducer = combineReducers({
    isLoading: loadReducer,
    isError: errorReducer,
    errorMessgae: errorReducer,
    posts: postListReducer,
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(logger));
}

export default configureStore;