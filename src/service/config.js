export const POSTS_API_ENDOINT = 'http://192.168.86.23:8080/';

export const PostListEndPoint = () => {
  return POSTS_API_ENDOINT + 'posts';
};

export const PostDetailEndPoint = ( id ) => {
  return POSTS_API_ENDOINT + 'posts/' + id;
};

export const PostCreateEndPoint = () => {
    return POSTS_API_ENDOINT + 'posts_create';
};