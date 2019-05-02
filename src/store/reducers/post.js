import { ADD_POST, DELETE_POST, UPDATE_POST, UPDATE_POST_ID } from "../actions/actionTypes";

const initialState = {
    post: [],
    postId: -1
}

const postReducer = (state = initialState, action) => {
    // console.log("post reducer");
    // console.log(action.type);
    // console.log(action.postId);
    switch (action.type) {
        case UPDATE_POST_ID:
            new_state = {
                ...state,
                postId:action.postId,
            };
            return new_state;
        default:
            return state;
    }
};

export default postReducer;