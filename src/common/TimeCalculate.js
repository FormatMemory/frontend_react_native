

export const getTime = (timestamp) => {
    now =  Number(new Date()); 
    diff = (now - timestamp*1000)/1000 // in seconds
    ary = {
            0:'Now', 1:[' mintue ago', ' mintues ago'], 2:[' hour ago', ' hours ago'], 3:[' day ago', 
            ' days ago'], 4:[' month ago', ' months ago'], 5:[' year ago', ' years ago']
    };
    idx = 5
    
    time_divider = [12, 30, 24, 60, 60]
    divider = 1
    for(i=0; i < time_divider.length; i++){
        divider *= time_divider[i]
    }
    // console.log(timestamp, now, diff);
    while(idx > 0){
        res = Math.floor(diff/divider);
        // console.log(idx, res, divider)
        if(res == 1){
            return ''+res+ary[idx][0]
        }
        if(res > 1){
            return ''+res+ary[idx][1] 
        }
        divider = divider/time_divider[5-idx];
        idx -= 1;
    }
    
    return ary[0]
    
    //return days + " Days "+ date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds";
}
