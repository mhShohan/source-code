const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

//Show Input Error
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


//Show input success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


//Check Email validation 
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, 'Email is not valid');
      }
}


//Check Required Function
function chechRequired(inputArray){
 inputArray.forEach(input => {
     if(input.value.trim() === ''){
         showError(input, `${input.id} is Required`)
     }else {
         showSuccess(input);
     }
 });
}


//Check Input Length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.id} must be at least ${min} charecters!`);
    } else if(input.value.length > max){
        showError(input, `${input.id} must be less than ${max}`);
    }else {
        showSuccess(input);
    }
}


//Check Password Match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password did not match!')
    }else if(input2.value < 6){
        showError(input2,input, `${input.id} must be at least ${min} charecters!`);
    }
    else{
        showSuccess(input2);
    }
}


//Event Listener
form.addEventListener("submit", function(e){
    e.preventDefault();

    chechRequired([username,email,password,confirmPassword]);
    checkLength(username, 3 ,15);
    checkLength(password, 6 ,20);
    checkEmail(email);
    checkPasswordMatch(password, confirmPassword);
});