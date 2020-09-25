var parent = document.querySelector(".modal-parent");
var button = document.querySelector(".btn");
var x = document.querySelector(".x");
var section = document.querySelector("section");


// Apper The PopUp Window 
button.addEventListener("click", apper);
function apper(){
    parent.style.display = "block";
    section.style.filter = "blur(5px)";
}


// Disapper The PopUp  window 
x.addEventListener("click",disapper)
function disapper(){
    parent.style.display = "none";
    section.style.filter = "blur(0)";
}

// Disapper When Click outside on the Modal Box 
parent.addEventListener("click", disapperParent);
function disapperParent(e){
    if(e.target.className == "modal-parent"){
        parent.style.display = "none";
        section.style.filter = "blur(0)";
    }
}