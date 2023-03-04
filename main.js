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
    else{realDay=30;}
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
//بداية تغير ارقام قسم السكيلز   
let spanValue = document.getElementsByClassName("span_value");
let skill = document.getElementsByClassName('skill')[0];
let endValue = [] ;
let viewValue = [];
let endFunction = 0 ;
for (let i = 0;i<spanValue.length;i++){
    endValue[i]=parseInt(spanValue[i].textContent)
    spanValue[i].textContent=0
    viewValue[i]=0;
};
function editvalue (){
    if(parseInt(spanValue[0].textContent) !=endValue[0] ){
        spanValue[0].textContent=(`${viewValue[0]++}%`)
    }
    else{if(parseInt(spanValue[1].textContent) !=endValue[1] ){
            spanValue[1].textContent=(`${viewValue[1]++}%`)
        }
            else{if(parseInt(spanValue[2].textContent) !=endValue[2] ){
                spanValue[2].textContent=(`${viewValue[2]++}%`)
            }
                else{if(parseInt(spanValue[3].textContent) !=endValue[3] ){
                    spanValue[3].textContent=(`${viewValue[3]++}%`)
                }
                else{
                    clearInterval (editvalue);
                    }
            }
        }
    }
};
window.onscroll = function(){
    if(window.scrollY >= skill.offsetTop -200){
        setInterval(editvalue,25);
        setInterval(editspan,25);
    }
    if(window.scrollY >= stat.offsetTop -200){
        setInterval(editstat,25);
    }
};
// نهاية تغير أرقام قسم السكيلز
let stat =document.getElementsByClassName("stat")[0];
let statValue = document.getElementsByClassName("stats");
let endstat =[];
let viewstat =[];
for(let j=0;j<statValue.length;j++){
    endstat[j]=parseInt(statValue[j].textContent);
    statValue[j].innerHTML=(`0
    <span>Clients</span>`);
    viewstat[j]=0
};
function editstat (){
    if (parseInt(statValue[0].textContent) != endstat[0]){
    statValue[0].innerHTML=(`${viewstat[0]++}<span>Clients</span>`)
    }else{
        if(parseInt(statValue[1].textContent) != endstat[1]){
        statValue[1].innerHTML=(`${viewstat[1]++}<span>Clients</span>`)
        }else{
            if (parseInt(statValue[2].textContent) != endstat[2]){
            statValue[2].innerHTML=(`${viewstat[2]++}<span>Clients</span>`)
            }else{
                if (parseInt(statValue[3].textContent) != endstat[3]){
                statValue[3].innerHTML=(`${viewstat[3]++}<span>Clients</span>`) 
                }else{
                clearInterval (editstat);
                }
            }
        }
    }
};
let span = document.getElementsByClassName('span_width');
let endspan =[];
let viewspan=[];
for(let i=0;i<span.length;i++){
    endspan[i]=parseInt(span[i].style.width);
    span[i].style.width=0;
    viewspan[i]=0;
}
function editspan(){
    if(viewspan[0] !=endspan[0]){
    span[0].style.width=(`${viewspan[0]++}%`);
    }else{
        if(viewspan[1] !=endspan[1]){
        span[1].style.width=(`${viewspan[1]++}%`);
        }else{
        if(viewspan[2] !=endspan[2]){
            span[2].style.width=(`${viewspan[2]++}%`);
        }else{
            if(viewspan[3] !=endspan[3]){
                span[3].style.width=(`${viewspan[3]++}%`);
            }else{
                clearInterval(editspan)
            }
        }
    }
}
}


