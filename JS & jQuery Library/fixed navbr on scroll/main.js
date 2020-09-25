$(document).ready(function(){
    $(window).scroll(function(){
        
        var headerHeight = $(".header-section").outerHeight();
        var shohan = $(window).scrollTop();

        if(shohan > headerHeight){
            $(".navbar").addClass("fixed");
        }
        else{
            $(".navbar").removeClass("fixed");
        }
    });
});