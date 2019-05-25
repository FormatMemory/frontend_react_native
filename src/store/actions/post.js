import { 
    ADD_POST, 
    DELETE_POST, 
    UPDATE_POST, 
    UPDATE_POST_ID, 
    REFRESH_POST_LIST,
    APPEND_POST_LIST
} from './actionTypes';

export const addPost = (post) => {
    return {
        type: ADD_POST,
        post: post
    };
};

export const deletePost = (key) => {
    return {
        type: DELETE_POST,
        postId: key
    };
};

export const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        post: post
    };
};

export const updatePostId = (postId) => {
    return {
        type: UPDATE_POST_ID,
        postId: postId
    }
}

export const refreshPostList = (postList, nextPage) => {
    return {
        type: REFRESH_POST_LIST,
        postList: postList,
        nextPage: nextPage
    }
}

export const appendPostList = (postList, nextPage) => {
    return {
        type: APPEND_POST_LIST,
        postList: postList,
        nextPage: nextPage
    }
}