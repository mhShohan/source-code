$(document).ready(function(){
//===================   
//sticky menu
//===================      
    $(".js-sticky-menu").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });
    
    
//===================       
//mixitup (potfolio section)
//===================   
    
    var mixer = mixitup('.container')
    
 //===================      
//For Smmoth Scrolling
 //===================      
    $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        window.location.hash = hash;
      });
    }
  });
    
});

 //===================      
//Mobile Navigation
 //===================
function openNav(){
    document.getElementById("myNav").style.width = "100%"
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%"
}
