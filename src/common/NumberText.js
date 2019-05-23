export const NumberText = (numToText, txt='') => {
    if(!numToText || numToText == 0){
        return "";
    }else if(!txt){
        return numToText+"";
    }else if(numToText < 10){
        return numToText+" "+ txt;
    }else{
        if(numToText >= 1000){
            numToText = Math.floor(numToText/100)/10 + 'K';
        }
        return numToText+" "+ txt + "s";
    }
}
