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


$('.home-carousel').slick({
    //dots: true,
    slidesPerRow: 4,
    rows: 2,
    infinite: false,
    speed: 500,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow:3,
        rows: 2
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesPerRow:2,
        rows: 2
      }
    },
      {
      breakpoint: 478,
      settings: {
       slidesPerRow: 2,
       rows: 2
      }
    },

  ]
});


$('.prod-carousel').slick({
    //dots: true,
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

$('.home-prod-carousel').slick({
    dots: true,
    // slidesPerRow: 4,
    rows: 1,
    slidesToShow:4,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
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
 



  $(".accordion").on("click", ".accordion-header", function() {
$(this).toggleClass("active").next().slideToggle();
 });

// $(".inner-accordion").on("click", ".accordion-header", function() {
// $(this).toggleClass("active").next().slideToggle();

//  });

//var slider = document.getElementById('slider');
// var slider = document.getElementById('range-slider');
// noUiSlider.create(slider, {
//     start: [20, 80],
//     connect: true,
//     range: {
//         'min': 0,
//         'max': 100
//     }
// });




var keypressSlider = document.getElementById('range-slider');


if(keypressSlider != null){

noUiSlider.create(keypressSlider, {
    start: [540, 2000],
    connect: true,
    //tooltips: [true, wNumb({decimals: 1})],
    range: {
        'min': [0],
        '1%': [10, 10],
        // '10%': [10, 10],
        // '50%': [80, 50],
        // '80%': 150,
        'max': 3000
    }
});

var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];
keypressSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});

// Listen to keydown events on the input field.

inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        keypressSlider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = keypressSlider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = keypressSlider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                keypressSlider.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    keypressSlider.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    keypressSlider.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});

}

});



jplist.init();



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

jQuery.expr.filters.offscreen = function(el) {
  var rect = el.getBoundingClientRect();
  return (
           (rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
         );
};




$(".dropdown").click(function(){
  $(".dropdown-content", this).toggle();
  if ($(".dropdown-content", this).is(':offscreen')) {
    $(".dropdown-content", this).css("right","0");
  }
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}