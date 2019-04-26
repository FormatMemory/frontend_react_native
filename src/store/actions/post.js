import { ADD_POST, DELETE_POST, UPDATE_POST } from "actionTypes";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        place: post
    };
};

export const deletePost = (key) => {
    return {
        type: DELETE_POST,
        placeId: key
    };
};

export const updatePost = (key) => {
    return {
        type: UPDATE_POST,
        placeId: key
    };
};