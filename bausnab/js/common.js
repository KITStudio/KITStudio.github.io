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
    speed: 300,
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
      breakpoint: 350,
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


});
