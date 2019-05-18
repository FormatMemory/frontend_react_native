const getDefaultImageUri = (imageLink, defaultLink) => {
    if(imageLink){
      return {uri: imageLink}
    }else{
        console.log({uri: defaultLink});
      return {uri: defaultLink}
    }
};

export default getDefaultImageUri;