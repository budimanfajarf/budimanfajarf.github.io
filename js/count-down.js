function countDownTime(countDownDate) {
    let now      = new Date().getTime();
    let distance = countDownDate - now;
    let days     = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours    = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds  = Math.floor((distance % (1000 * 60)) / 1000);             

    let times = days + "d &nbsp;" 
                + hours + "h &nbsp;" 
                + minutes + "m &nbsp;" 
                + seconds + "s &nbsp;";

    if(distance < 0)
        return null;
        
    return times;
}