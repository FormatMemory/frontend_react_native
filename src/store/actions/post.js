import { ADD_POST } from "actionTypes"

export const addPost = (key) => {
    return {
        type: ADD_POST,
        placeId: key
    };
};