
export const getTime = (datetime) => {
    time = Date.parse(datetime);
    // time = new Date( datetime ).getTime();
    now = new Date().getTime();
    msec = now - time;
    date_diff = new Date( msec );
    hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    var days = Math.floor(msec / 1000 / 60 / (60 * 24));
    

    return days + " Days "+ date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds";
}
