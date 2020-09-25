$(document).ready(function(){

    // Owl carousel 
    $("#header-slider").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items:1 
    });

    //Sidebar menu
    $(".menu-icon").click(function(){
        $("#sidebar-menu").toggleClass("sidebar-toggle");
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 10){
            $('#menu-bar').addClass('sticky-menu');
        }else{
            $('#menu-bar').removeClass('sticky-menu');
        }
    });

});