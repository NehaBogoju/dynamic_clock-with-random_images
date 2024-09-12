setInterval(showTime,1000);
function showTime(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    
    ampm="AM";
    if(hours>=12){
        if(hours>12)
            hours=hours-12;
        ampm="PM";
    }
    else if(hours==0){
        hours=12;
        ampm="AM";
    }
    hours=(hours<10)?"0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;
    let currentTime=hours+":"+minutes+":"+seconds+" "+ampm;
    document.getElementById("time").innerHTML=currentTime;
   
}
showTime();

setInterval(showImage, 3600000);
function showImage() {
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    var imageUrl = `./images/bi${randomNumber}.jpg`; 
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

showImage();







