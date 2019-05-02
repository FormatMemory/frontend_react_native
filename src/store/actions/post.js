import { ADD_POST, DELETE_POST, UPDATE_POST, UPDATE_POST_ID } from './actionTypes';

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