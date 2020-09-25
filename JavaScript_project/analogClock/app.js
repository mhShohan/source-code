setInterval(setClock,1000)

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")

function setClock(){
    const currentTime = new Date()
    const secondRatio = currentTime.getSeconds() / 60
    const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentTime.getHours()) / 12

    setRotation(secondHand , secondRatio)
    setRotation(minuteHand , minuteRatio)
    setRotation(hourHand , hourRatio)
}


function setRotation(element , rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()