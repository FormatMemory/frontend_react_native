import { 
    POSTS_API_ENDOINT,
    PostListEndPoint, 
    PostDetailEndPoint, 
    PostCreateEndPoint
} from '../config';
import fetch_retry from '../FetchRetry';

const MAX_RETRY = 5;
export const FetchPostsList = (next, retry = 0) => {
    if(next === undefined || next == ''){
        next = PostListEndPoint();
    }
    if(next === null){
        return [];
    }
    // console.log(next);
    return fetch_retry(next, MAX_RETRY)
      .then((response) => response.json())
      .then((responseJson) => {
        return (responseJson);
      })
      .catch((error) => {
            console.error('fetch error');
            alert('Something goes wrong...');
            return {};
          }
      );
  }

export const FetchPostsDetail = (postId=-1, retry = 0) => {
    next = PostDetailEndPoint(postId);
 
    return fetch_retry(next, MAX_RETRY)
      .then((response) => response.json())
      .then((responseJson) => {
          if( responseJson.image && !responseJson.image.startsWith(POSTS_API_ENDOINT)){
            responseJson.image = POSTS_API_ENDOINT + responseJson.image 
          }
        return (responseJson);
      })
      .catch((error) => {
        console.log('fetch '+ next + ' Failed, retry: '+ retry);
        console.log(error);
        alert('Something goes wrong...');
        return {};
      }); 
  }