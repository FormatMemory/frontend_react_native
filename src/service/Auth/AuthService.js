import { 
    AuthUserEngPoint,
} from '../config';
import fetch_retry from '../FetchRetry';

const MAX_RETRY = 5;
export const authUser = (token, type, retry = 0) => {
    if(token === undefined || token === '' || token === null){
       return False 
    }

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