import { 
    ADD_POST, 
    DELETE_POST, 
    UPDATE_POST, 
    UPDATE_POST_ID, 
    REFRESH_POST_LIST, 
    APPEND_POST_LIST 
} from "../actions/actionTypes";

const initialState = {
    postList: [],
    postId: -1,
    nextPage: null
}

const postListReducer = (state = initialState, action) => {
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
        case UPDATE_POST:
            newPostList = [];
            for(let i = 0; i < state.postList.length; i++){
                if(state.postList[i].id != action.post.id){
                    newPostList.push(state.postList[i]);
                }else{
                    newPostList.push(action.post); 
                }
            }
            return {
                ...state,
                postList: newPostList
            };
        case REFRESH_POST_LIST:
            return {
                ...state,
                postList: [...action.postList],
                nextPage: action.nextPage
            };
        case APPEND_POST_LIST:
            return {
                ...state,
                postList:[...state.postList, ...action.postList],
                nextPage: action.nextPage
            };
        default:
            return state;
    }
};

export default postListReducer;