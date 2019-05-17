import { 
    PostListEndPoint, 
    PostDetailEndPoint, 
    PostCreateEndPoint
} from '../config';

const MAX_RETRY = 5;
export const FetchPostsList = (next, retry = 0) => {
    if(next === undefined){
        next = PostListEndPoint();
    }
    if(next === null){
        return {};
    }
    console.log(next);
    return fetch(next)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
        return (responseJson);
      })
      .catch((error) => {
          if(retry > MAX_RETRY){
            console.log('fetch '+ next + ' Failed, retry: '+ retry);
            FetchPostsList(next, retry+1)
          }else{
            console.error('fetch error');
            alert('Something goes wrong...');
          }
      });
  }