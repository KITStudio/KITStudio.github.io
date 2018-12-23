


$(function() {





 $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

$('.prod-img-carousel').slick({
dots: true,
infinite: false,
speed: 500,
arrows: false,
});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items: 1,
    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
    dots: true,
    smartSpeed: 600,
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
    "iconPanels": true,
    "counters": true,
  });

var api = $('#menu').data('mmenu');
api.bind('open:finish', function(){
 
  $('.hamburger').addClass('is-active');
  //$("#menu").css("visibility", "visible");
});
api.bind('close:finish', function(){

  $('.hamburger').removeClass('is-active');
  $("#menu").css("visibility", "hidden");
});

$(".hamburger").click(function(){
$("#menu").css("visibility", "visible");
if ($(".hamburger").hasClass('is-active') ) {
  api.close();
   };

});
 



  $(".accordion").on("click", ".accordion-header", function() {
$(this).toggleClass("active").next().slideToggle();
 });



var keypressSlider = document.getElementById('range-slider');


if(keypressSlider != null){

noUiSlider.create(keypressSlider, {
    start: [540, 2000],
    connect: true,
    range: {
        'min': [0],
        '1%': [10, 10],
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

jplist.init();



$(".dropdown").click(function(){
  $(".dropdown-content", this).toggleClass("show");
   // document.getElementById("myDropdown").classList.toggle("show");
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



var divs = $(".dropdown-content > ul > li");
for(var i = 0; i < divs.length; i+=10) {
  divs.slice(i, i+10).wrapAll("<div class='item'> </div>");
}





/*********************** 8 guynic heto texapoxum nerqevi tox*********************/


var divs = $(".choose-color-block > li");
for(var i = 0; i < divs.length; i+=8) {
  divs.slice(i, i+8).wrapAll("<div class='color-wrapper'> </div>");
}

/*********************** yntrac guyny talis em product-color inputin *********************/

$(".choose-color-block .color-wrapper > li").click(function(){
  $(".choose-color-block .color-wrapper > li").removeClass('active');
  $(this).addClass('active');
  var col=($(this).data("color"));
  $( "input[name='product-color']" ).val(col);
  $( ".cuyc-tur" ).html( "<b>Guyn:</b> " + $( "input[name='product-color']" ).val() );
  $('label[for="color-picker"] i').css("background-color", "transparent");
})




// function displayVals() {
//   var colorValues = $( "#color-picker" ).val();
//   $( "input[name='product-color']" ).val(colorValues);
//   $( ".cuyc-tur" ).html( "<b>Guyn:</b> " + $( "input[name='product-color']" ).val() );
// }
 
// $( "#color-picker" ).change( displayVals );
// displayVals();

/********** yntrum em guyny u talis glxavor colori imputin *****************/

$( "#color-picker" ).change(function() {
    var colorValues = $( "#color-picker" ).val();    
  $( "input[name='product-color']" ).val(colorValues);
   $(".choose-color-block .color-wrapper > li").removeClass('active');
  $('label[for="color-picker"] i').css("background-color", colorValues);

});


/********** yntrum em fasovkan u talis fasovkayi inputin *****************/
var fas = $(".fasovki  li.active").data("fasovki");
$( "input[name='product-fasovka']" ).val(fas);

$(".fasovki  li").click(function(){
   $(".fasovki  li").removeClass('active');
  $(this).addClass('active');
   var fas=($(this).data("fasovki"));
 $( "input[name='product-fasovka']" ).val(fas);
 
 var pr=($(this).data("fasovki-price")); 
 $(".product-price span").html(pr); 
 $( "input[name='product-price']" ).val(pr);
 
 prodSum();

priceTableDisc();

})

function priceTableDisc(){

var a =$(".fasovki  li.active").data("fasovki-price");
$(".price-table li:nth-child(1) span").html(a);

  var disc=$(".fasovki  li.active").data("disc1");
  var b = a*disc/100;
  var s = a-b;
  $(".price-table li:nth-child(2) span").html(s);
   var disc=$(".fasovki  li.active").data("disc2");
  var b = a*disc/100;
  var s = a-b;
  $(".price-table li:nth-child(3) span").html(s);

}

priceTableDisc();
/***************************************  QUANTTY  *********************************/

function prodSum(){

  var quan = parseInt( $("input[name='product-quantity']").val(),10);
  var prc = parseInt( $(".product-price span").text(), 10 );
  var sum = quan* prc;

  $(".product-total-price span").html(sum);

  $( "input[name='product-total-price']" ).val(sum);
  $( "input[name='product-price']" ).val(prc);


}


function numberWithCommas(number) {
    var parts = number.toString().split(" ");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(" ");
}


prodSum();




$(".product-price span").each(function() {
    var num = $(this).text();
    var commaNum = numberWithCommas(num);
    $(this).text(commaNum);
  });

$(".product-total-price span").each(function() {
    var num = $(this).text();
    var commaNum = numberWithCommas(num);
    $(this).text(commaNum);
  });

$(".but").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);



var quan = parseInt( $("input[name='product-quantity']").val(),10);
var prc = parseInt( $(".product-price span").text(), 10 );
var max;
  
var sum = quan* prc;
  
var max1 = $(".price-table ul > li:nth-child(1) > p" ).data("max-val");
var max2 = $(".price-table ul > li:nth-child(2) > p").data("max-val");
var max3 = $(".price-table ul > li:nth-child(3) > p").data("max-val");

  
   if(sum < max1){
     var prc = $(".price-table ul > li:nth-child(1) > span").text().replace(/[^0-9]/gi, '');
    prc = parseInt( prc, 10 );
       sum = quan* prc;
       $(".product-price span").html(prc);
       $(".price-table ul > li").removeClass("active");
        $(".price-table ul > li:nth-child(1)").addClass("active");
   }
   
if(sum >= max2  && sum < max3){
    var prc = $(".price-table ul > li:nth-child(2) > span").text().replace(/[^0-9]/gi, '');
    prc = parseInt( prc, 10 );
    $(".product-price span").html(prc);
    sum = quan* prc;
    $(".price-table ul > li").removeClass("active");
   $(".price-table ul > li:nth-child(2)").addClass("active");
   }

   if(sum >= max3){
    var prc = $(".price-table ul > li:nth-child(3) > span").text().replace(/[^0-9]/gi, '');
    prc = parseInt( prc, 10 );
    $(".product-price span").html(prc);
   var sum = quan* prc;
    $(".price-table ul > li").removeClass("active");
     $(".price-table ul > li:nth-child(3)").addClass("active");
   }

 $(".product-total-price span").html(sum);
$(".product-total-price span").each(function() {
    var num = $(this).text();
    var commaNum = numberWithCommas(num);
    $(this).text(commaNum);
  });

$(".product-price span").each(function() {
    var num = $(this).text();
    var commaNum = numberWithCommas(num);
    $(this).text(commaNum);
  });


$( "input[name='product-total-price']" ).val(sum);
$( "input[name='product-price']" ).val(prc);

});

/*********************** get shop item code ***********************************/

 var code = $(".item-cod span").text().replace(/[^0-9]/gi, '');
code = parseInt( code, 10 );
$('input[name="product-code"]').val(code);


/*********   progresia ********/
// var sum , prc
// sum=0
//   for ( var i=1; i<= quan ; i++){
//     var sum = sum + prc;
//     if( sum >= 15000){
//       prc= 1425;
//     }
//     if( sum >= 40000){
//       prc= 1350;
//     }
//   } 
//    $(".product-total-price").html(sum);
//   });



$("#buy-form").submit(function(){
    if ($("input[name='product-color']").val() == '') {
    $(".product-detail .error").css("display", "inherit");
    return false;
    }
  });

/**** end *///
$("body").css("display", "inherit")

});






