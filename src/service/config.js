export const API_ENDOINT = 'http://35.229.179.199';

export const PostsEndPoint = () => {
  return API_ENDOINT + '/posts';
};

export const PostDetailEndPoint = ( id ) => {
  return API_ENDOINT + '/posts/' + id;
};

export const PostCreateEndPoint = () => {
  return API_ENDOINT + '/posts_create';
};

export const AuthUserEngPoint = (token, type="Facebook") => {
  return API_ENDOINT + '/token';
}