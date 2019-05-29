import { 
    ADD_POST, 
    DELETE_POST, 
    UPDATE_POST, 
    UPDATE_POST_ID, 
    REFRESH_POSTS,
    APPEND_POSTS
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

export const refreshPosts = (posts, nextPage) => {
    return {
        type: REFRESH_POSTS,
        posts: posts,
        nextPage: nextPage
    }
}

export const appendPosts = (posts, nextPage) => {
    return {
        type: APPEND_POSTS,
        posts: posts,
        nextPage: nextPage
    }
}