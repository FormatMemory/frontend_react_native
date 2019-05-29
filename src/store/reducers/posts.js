import { 
    ADD_POST, 
    DELETE_POST, 
    UPDATE_POST, 
    UPDATE_POST_ID, 
    REFRESH_POSTS, 
    APPEND_POSTS
} from "../actions/actionTypes";
import * as I from 'immutable'

const makeState = I.Record({
    posts: I.Map(),
    postId: -1,
    nextPage: null,
})

const initialState = makeState()

const postsReducer = (state = initialState, action) => {
    // console.log("post reducer");
    // console.log(action.type);
    // console.log(action.postId);
    switch (action.type) {
        case UPDATE_POST_ID:
            return state.set('postId', action.poseId)
        case UPDATE_POST:
            return state.update('posts', posts => posts.set(action.post.id, action.post))
            /*
            newPostList = [];
            for(let i = 0; i < state.posts.length; i++){
                if(state.posts[i].id != action.post.id){
                    newPostList.push(state.posts[i]);
                }else{
                    newPostList.push(action.post); 
                }
            }
            return {
                ...state,
                posts: newPostList
            };
            */
        // case POST_LIKE:
        //     return state.update('posts', posts=>posts.update(action.postId, post => ({
        //         ...post,
        //         like: post.like+1,
        //     })))
        case REFRESH_POSTS:
            return state.update('posts', posts => I.Map().withMutations(
                postMutable => action.posts.forEach(post => postMutable.set(post.id, post))
            ))
        case APPEND_POSTS:
            return state.update('posts', posts => posts.withMutations(
                postMutable => action.posts.forEach(post => postMutable.set(post.id, post))
            ))
        default:
            return state;
    }
};

export default postsReducer;