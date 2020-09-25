// Set intialize count 
let count = 0;

// select value and buttons 

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;

        //event counter
        if(style.contains("decrease")){
            count--;
        }else if(style.contains("increase")){
            count++;
        }else if(style.contains("reset")){
            count = 0;
        }

        // color changer 
        if(count > 0){
            value.classList.add('text-success')
            value.classList.remove('text-danger')
        }else if(count < 0){
            value.classList.add('text-danger')
            value.classList.remove('text-success')
        }else if(count == 0){
            value.classList.remove('text-success')
            value.classList.remove('text-danger')
        }

        value.textContent = count;
    })
})