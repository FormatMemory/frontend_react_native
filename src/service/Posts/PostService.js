import { 
    PostListEndPoint, 
    PostDetailEndPoint, 
    PostCreateEndPoint
} from '../config';

export const getPostsList = (next = PostListEndPoint()) => {

    return fetch(next)
      .then((response) => response.json())
      .then((responseJson) => {
        return (responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }