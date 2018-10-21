$(function() {

$('.owl-carousel').owlCarousel({
    loop:true,
    //margin:10,
    nav:true,
    items: 1,
    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
    dots: true,
    smartSpeed: 600,
    /*responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }*/
});

$('.manuf-carousel').slick({
    dots: true,
    slidesPerRow: 6,
    rows: 2,
    infinite: false,
    speed: 500,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 4,
        rows: 2,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesPerRow: 3,
        rows: 2,
      }
    },
      {
      breakpoint: 478,
      settings: {
        slidesPerRow: 3,
        rows: 2,
      }
    },
     {
      breakpoint: 450,
      settings: {
        slidesPerRow: 2,
        rows: 2,
      }
    },
  ]
});


var d = new Date();
     var year = d.getFullYear();
     $(".year").html(year);



$('.prod-carousel').slick({
    dots: true,
    // slidesPerRow: 4,
    // rows: 1,
    slidesToShow:4,
    infinite: false,
    speed: 500,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:3,
        
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow:2,
      }
    },
      {
      breakpoint: 478,
      settings: {
       slidesToShow: 2,
      }
    },

  ]
});


$('#menu').mmenu({

    extensions: [ 'widescreen','effect-menu-slide',"border-offset","pagedim-black"],
    navbar: {
      title: ''
    },
    offCanvas: {
      position: 'right'
    },
    //"slidingSubmenus": false,
    "iconPanels": true,
    "counters": true,
    //"offCanvas": false,
  });

var api = $('#menu').data('mmenu');
api.bind('open:finish', function(){
 
  $('.hamburger').addClass('is-active');
  //$("#menu").css("visibility", "visible");
});
api.bind('close:finish', function(){

  $('.hamburger').removeClass('is-active');
  $("#menu").css("visibility", "hidden");
 // $('.menu-hamburger .hamburger').css("visibility", "inherit");
// $('.hamburger').css("visibility", "inherit");
});

$(".hamburger").click(function(){
$("#menu").css("visibility", "visible");
if ($(".hamburger").hasClass('is-active') ) {
  api.close();
  
  // $('.hamburger').removeClass('is-active');

   };
   // $('.hamburger').css("visibility", "hidden");
   // $('.menu-hamburger .hamburger').css("visibility", "inherit");
});
 






});


