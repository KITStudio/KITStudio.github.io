$(document).ready(function() {
	$(".nav.navbar-nav li a").click(function(){
		$(".nav.navbar-nav li").removeClass("active");
		$(this).parent().addClass("active");
   });

	$('header ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
    $('header .dropdown-menu').hover(function() {
    	$(this).parent().css({"background-color": "#F4BD13"});
    	$(this).parent().find('.dropdown-toggle').css({"color": "#555"});
      }, function() {
      	$(this).parent().css({"background-color": ""});
      	$(this).parent().find('.dropdown-toggle').css({"color": "#fff"});
    });
/* copy loaded thumbnails into carousel */
function readyFn( jQuery ) {
   // Code to run when the document is ready.
	$('.row .carousel-inner .innr').ready(function() {
  
}).each(function(i) {
  if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parents('div.item');
    var title = $(this).parent('a').attr("title");
    
    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('#m_slide'); 
    if (i==0){ // set first item active
     item.addClass('active');
    }
  }
});
}
 
// /* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.row .carousel-inner .innr').click(function(){
    var idx = $(this).parents('div.item').index();
  	var id = parseInt(idx);
  	$("#m_slide").empty();
	$( document ).ready( readyFn );
// // or:
// $( window ).load( readyFn );
	$('#myModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected
  	
});


///////////////


    $('.sadd').click(function(){
    $('.sattr').parent().find('.dropdown-menu').show(0).delay(4000).hide(0);
	});
    $('.dadd').click(function(){
    $('.dattr').parent().find('.dropdown-menu').show(0).delay(4000).hide(0);
	});
	    
////////////////////
    if($(window).width() < 959)
    {
        $("header .navbar div").removeClass("container");
    } else {
        $("header .navbar div").addClass("container");
    }
    //////////////////
	if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        offset: {top:100}
    });
	}

/*======= page_2 =======*/
 /*=====================================*/
$('#myCarousel').carousel({
    interval:0
});

//handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

//when the carousel slides, auto update
$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});


/*===========================*/
$('.produkt_inf button').click(function(){
	var clickclass = $(this).attr('id');
	$('.produkt_inf>div.active').removeClass("active");
	$('.produkt_inf>div.'+clickclass).addClass("active");
	$('.produkt_inf>button').removeClass("atv");
	$(this).addClass("atv");
});

 $(function() {
            $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 1000000,
               values: [ 100000, 600000 ],
               slide: function( event, ui ) {
                  $( "#pricemin" ).val( ui.values[ 0 ]);
                  $( "#pricemax" ).val( ui.values[ 1 ]);
               }
           });
         $( "#pricemin" ).val($( "#slider-3" ).slider( "values", 0 ));
         $( "#pricemax" ).val($( "#slider-3" ).slider( "values", 1 ));
         });

$('button#remove').click(function(){
	 $( "#slider-3" ).slider({
               range:true,
               min: 0,
               max: 1000000,
               values: [ 100000, 600000 ],
               slide: function( event, ui ) {
                  $( "#pricemin" ).val( ui.values[ 0 ]);
                  $( "#pricemax" ).val( ui.values[ 1 ]);
               }
           });
 $('input:checkbox').removeAttr('checked');
	});

$('.site-bar>.nav>li>button').click(function(){
	var clickclass = $(this).attr('id');
	if(clickclass=="active")
	{
		$(this).removeAttr('id');
		$(this).parent().removeClass("active");
	}else{
	$(this).attr("id","active");
	$(this).parent().addClass("active");
}
});
$('.btn_filter').click(function(){
	var clickclass = $(this).attr('id');
	if(clickclass=="close")
	{
		$(this).removeAttr('id');
		$(this).attr("id","open");
		$(this).parent().children("div").attr("id","actv");
		$(this).html("Фильтры");
	}else if(clickclass=="open")
	{
		$(this).parent().children("div#actv").removeAttr('id');
		$(this).removeAttr('id');
		$(this).attr("id","close");
	$(this).html("Закрыть");
}
});
});
