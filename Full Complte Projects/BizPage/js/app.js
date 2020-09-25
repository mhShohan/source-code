$(document).ready(function(){

  // Scroll sticky header 
  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $("nav").addClass("nav-bg");
    }else{
      $("nav").removeClass("nav-bg");
    }
  });


	//counterUp
	$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  //Owl Crousel
  $('.client-carousel').owlCarousel({
    autoplay: true,
    dots:true,
    loop:true,
    responsive: {
      0: {items : 2},
      768: {items : 4},
      990: {items: 6}
    }
  });

  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    dots:true,
    loop:true,
    items:1
  });
//Isotope Plugins

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('.portfolio-filter li').on( 'click', function() {
    $('.portfolio-filter li').removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

});

