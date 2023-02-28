let timeDays = document.getElementsByClassName("time_days");
let timeHours = document.getElementsByClassName('time_hours');
let timeMinutes = document.getElementsByClassName('time_minutes');
let timeSeconds = document.getElementsByClassName('time_seconds');
let realDay ;
let timeNow = new Date ();
if(timeNow.getMonth() == 1){
    realDay =28;
}else{
    if(timeNow.getMonth() == 0 || timeNow.getMonth() == 2 
    || timeNow.getMonth() == 4 || timeNow.getMonth() == 6
    || timeNow.getMonth() == 7 || timeNow.getMonth() == 9
    || timeNow.getMonth() == 11)
    {realDay = 31;}
    else{realDay;}
}
;

function changeDate(){
    timeNow = new Date ();
    timeDays[0].textContent= realDay-timeNow.getDate();
    timeHours[0].textContent= 24-timeNow.getHours();
    timeMinutes[0].textContent = 60-timeNow.getMinutes();
    timeSeconds[0].textContent=60-timeNow.getSeconds(); 
};
setInterval(changeDate,1000);