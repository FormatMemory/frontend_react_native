import { POSTS_API_ENDOINT } from './config';

const defailtImage = require('../../assets/images/image_not_found.png');
const defaultProfile = require('../../assets/images/default_profile.png');

export const getDefaultImageUri = (imageLink, isProfile = false) => {
    if(imageLink && !imageLink.startsWith(POSTS_API_ENDOINT)){
        return {uri: POSTS_API_ENDOINT+imageLink}
    }
    else if(imageLink){
        return {uri: imageLink};
    }else if(isProfile){
        return defaultProfile;
    }else{
        return defailtImage;
    }
};