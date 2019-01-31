let setDate = document.querySelector('#date');
    window.addEventListener('load',()=>{
        setDate.setAttribute('value',getDate());
    });

let setTime = document.querySelector('#time');
    window.addEventListener('load',()=>{
        setTime.setAttribute('value',getTime());
    });

function getDate(){
    return new Date().toDateString();
}

function getTime(){
    let hour = (new Date().getHours());
    let minute = new Date().getMinutes();
    if(hour > 12){
        hour -= 12;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    return `${hour}:${minute}`;
}