import { ADD_POST, DELETE_POST, UPDATE_POST } from "../actions/actionTypes";

const initialState = {
    post: []
}

const postReducer = (state = initialState, action) => {
    // console.log("post reducer");
    switch (action.type) {
        default:
            return state;
    }
};

export default postReducer;