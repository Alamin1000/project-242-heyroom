(function ($) {
  "use strict";

  // device-size
  $('body').append("<div class='device-size-detector' style='height: 100%; width: 100%; position: fixed; top: 0; left: 0; opacity: 0; visibility: hidden; pointer-events: none;'></div>");
  $('body').css({
    '--vh': $('.device-size-detector').outerHeight() + 'px',
    '--vw': $('.device-size-detector').outerWidth() + 'px'
  });


  // hero-background
  $('.hero-in').css('--hero-in-height',$('.hero-in').outerHeight() + "px");
  $('.hero-in').css('--hero-in-width',$('.hero-in').outerWidth() + "px");


  // owl-carousel
  $('.x-slider-active').owlCarousel({
    loop:true,
    margin:50,
    items:4,
    responsiveClass:true,
    nav:false,
    dots: false,
    // center:true,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
          items: 1,
          margin: 25,
          stagePadding: 80,
          center:true
        },
        390:{
          items: 1,
          margin: 30,
          stagePadding: 120,
          center:true
        },
        565:{
          items: 2,
          margin: 30
        },
        767:{
          items: 3,
          margin: 30
        },
        991:{
          margin: 30
        },
        1399:{
          
        }
    }
  });



  //hero-animation
  {
    const hero = document.getElementById('hero-section');
    const heroHV = hero.offsetHeight;
    let animationPosition = 0;
    let aCount = 4;
    let currentC = "hero-A0"
    const windHeight = window.innerHeight;
    hero.style.height = (heroHV  + (windHeight * (aCount - 1))) + "px";
    {
      for(let i=0; i < aCount; i++) {
        let toDo1 = function(){
          const windPos = window.scrollY;
          let check = windPos > (windHeight * (0.3 + i -1)) && windPos < (windHeight * (0.3 + i));
          if(check) {
            document.querySelector('body').setAttribute('hero-AS', (i));
            animationPosition = i;
          }
        }
        document.addEventListener('scroll', toDo1);
      }
    }
  }

  

})(jQuery);




$(document).ready(function(){


  // preloader
  $("#preloader").fadeOut(500);

})



$(window).on('load',adjustRatio);
function adjustRatio() {
  $('.know-area').each(function(){
    var Width = $(this).outerWidth();
    $(this).css('--this-width', Width + 'px');
    $(this).css('--this-width-number', Width);
    var Height = $(this).outerHeight();
    $(this).css('--this-height', Height + 'px');
    $(this).css('--this-height-number', Height);
    });
}








