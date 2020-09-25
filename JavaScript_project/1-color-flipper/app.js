let colors = [0,1,2,4,5,6,7,8,9,"a","b","c","d","e"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += colors[getRandomNumbers()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})


function getRandomNumbers(){
    return Math.floor(Math.random()*colors.length);
}