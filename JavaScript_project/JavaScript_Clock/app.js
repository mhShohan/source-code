// Prealoader 
let loader = document.querySelector(".preloader");

window.addEventListener("load", disapper)
function disapper(){    
    loader.classList.add("hide");
    hideHome.classList.remove("hide");
}



// Button Click
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let digitalClock = document.querySelector(".digital-clock");
let analogueClock = document.querySelector(".analogue_clock");
let hideHome = document.querySelector(".home");
let closeDeigialClock = document.querySelector("#close-btn1");
let closeAnalogueClock = document.querySelector("#close-btn2");


// Digital Clock's Button  event 
btn2.addEventListener("click", showDigitalClock)
function showDigitalClock(){
    digitalClock.classList.remove("hide");
    hideHome.classList.add("hide");
}

// Analogue Clock 
btn1.addEventListener("click",showAnalogueClock)
function showAnalogueClock(){
    analogueClock.classList.remove("hide");
    hideHome.classList.add("hide");
}

// X button Event s
closeDeigialClock.addEventListener("click",hideDigitalClock)
function hideDigitalClock(){
    digitalClock.classList.add("hide");
    hideHome.classList.remove("hide");
}
closeAnalogueClock.addEventListener("click",hideAnalogueClock)
function hideAnalogueClock(){
    digitalClock.classList.add("hide");
    hideHome.classList.remove("hide");
}






// Digital Clock Scripts 
function showTime(){

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date = time.getDate();
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let session = "am";

    if(hours>12){
        hours = hours - 12;
        session = "pm";
    }
	if(hours==00){
        hours = 12;
    }
	
    if(seconds<10){
        seconds = "0"+seconds;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(hours<10){
        hours = "0"+hours;
    }
    if(date<10){
        date = "0"+date;
    }

    // Month Name Array 
    let monthArray = ["january","february","march","april,","may","june","july","august","september","october","november","december"];

    let monthName = monthArray[month];

    // WeekDate Array 
    let weekDate = [
        "sunday","monday","tuesday","wednesday","thusday","friday","saturday"
    ];
    let weekDay = weekDate[day];

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".weekday").innerHTML = weekDay;
    document.querySelector(".day").innerHTML = date;
    document.querySelector(".month").innerHTML = monthName;
    document.querySelector(".year").innerHTML = year;
    document.querySelector(".session").innerHTML = session;

    setTimeout(showTime,1000)

}
showTime();


// Analogue Clock 

setInterval(setClock,1000)

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")

function setClock(){
    const currentTime = new Date()
    const secondRatio = currentTime.getSeconds()/60
    const minuteRatio = (secondRatio + currentTime.getMinutes())/60
    const hourRation = (minuteRatio + currentTime.getHours())/12

    setRation(secondHand, secondRatio)
    setRation(minuteHand, minuteRatio)
    setRation(hourHand, hourRation)
}

function setRation(element,rotationRatio){
    element.style.setProperty("--rotation",rotationRatio * 360)
}

setClock()