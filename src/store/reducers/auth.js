import { 
   UPDATE_TOKEN,
   DELETE_TOKEN 
} from "../actions/actionTypes";
import * as I from 'immutable'

const makeState = I.Record({
    token:null
})

const initialState = makeState()

const authReducer = (state = initialState, action) => {
    // console.log("post reducer");
    // console.log(action.type);
    // console.log(action.postId);
    switch (action.type) {
        case UPDATE_TOKEN:
            return state.set('token', action.authData)
        case DELETE_TOKEN:
            return state.set('token', null)
        default:
            return state;
    }
};

export default authReducer;