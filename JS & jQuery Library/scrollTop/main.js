$(document).ready(function(){
    $(".scrollicon").click(function(){
        $("html").animate({'scrollTop' : '0'},2000);

        return false;
    });

    // Scroll korar por icon show hobe
    
    $(window).scroll(function(){
        var shohan = $(window).scrollTop();

        if(shohan > 200){
            $(".scrollicon").fadeIn(1000);
        }
        else{
            $(".scrollicon").fadeOut(1000);
        }



    });


});