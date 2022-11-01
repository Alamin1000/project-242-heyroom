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
          margin: 10,
          stagePadding: 80,
        },
        390:{
          items: 1,
          margin: 20,
          stagePadding: 120,
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


  // hero-animation 
  {
    const hero = document.getElementById('hero-section');
    const heroHV = hero.offsetHeight
    let anCount = 0;
    let preCount = 0;
    const windHeight = window.innerHeight;
    {
      hero.style.height = (heroHV  + (windHeight * (1 + preCount))) + "px";
      preCount++;
      let toDo1 = function(){
        const windPos = window.scrollY;
        let check = windPos > (windHeight * (0.3 + anCount));
        if(check) {
          var preA = document.querySelectorAll('.hb-cheap');
          var a = document.querySelectorAll('.hrc-v1');
          preA.forEach(elmN => {
            elmN.style.background = 'transparent';
          });
          a.forEach(elmN => {
            elmN.style.background = '#64F0C8';
          });
          anCount++;
          document.removeEventListener('scroll',toDo1)
        }
      }
      document.addEventListener('scroll', toDo1);
    }
    {
      hero.style.height = (heroHV  + (windHeight * (1 + preCount))) + "px";
      preCount++;
      let toDo1 = function(){
        const windPos = window.scrollY;
        let check = windPos > (windHeight * (0.3 + anCount));
        if(check) {
          var preA = document.querySelectorAll('.hb-cheap');
          var a = document.querySelectorAll('.hrc-v2');
          preA.forEach(elmN => {
            elmN.style.background = 'transparent';
          });
          a.forEach(elmN => {
            elmN.style.background = '#9664FF';
          });
          let b = document.getElementById('h1');
          let bCont = `Das ist der  <span class="cheap bg-theme2">Vibe</span> <br> der BEWERBER*IN`
          b.innerHTML = bCont
          anCount++;
          document.removeEventListener('scroll',toDo1)
        }
      }
      document.addEventListener('scroll', toDo1);
    }
    {
      hero.style.height = (heroHV  + (windHeight * (1 + preCount))) + "px";
      preCount++;
      let toDo1 = function(){
        const windPos = window.scrollY;
        let check = windPos > (windHeight * (0.3 + anCount));
        if(check) {
          var preA = document.querySelectorAll('.hb-cheap');
          var a = document.querySelectorAll('.hrc-v2');
          preA.forEach(elmN => {
            elmN.style.background = 'transparent';
          });
          a.forEach(elmN => {
            elmN.style.background = '#3CB4CD';
          });
          let b = document.getElementById('h1');
          let bCont = `Das ist euer <br> gemeinsamer
          <span class="cheap bg-theme3">Vibe</span> `
          b.innerHTML = bCont
          anCount++;
          document.removeEventListener('scroll',toDo1);
        }
      }
      document.addEventListener('scroll', toDo1);
    }
  }



  

})(jQuery);




$(document).ready(function(){


  // preloader
  $("#preloader").fadeOut(500);

})











