function animatedForm(){
    const arrows = document.querySelectorAll('.fa-arrow-right');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            
            //Validation Check
            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = 'shake 0.5s ease';
            }

            //Remove the animation 
            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            })
        });
    });
}

// User Vlidation Function
function validateUser(user){
    if(user.value.length < 6){
        error('rgb(189,87,87)');
    }else{
        error('rgb(47, 170, 98)');
        return true;
    }
}
//Email Validation Function
function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)){
        error('rgb(47, 170, 98)');
        return true;
    }else{
        error('rgb(189,87,87)');
    }

}


//Error Showing Function
function error(color){
    document.body.style.backgroundColor = color;
}
//Next Form SHowing Function
function nextSlide(parent, nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}




animatedForm();