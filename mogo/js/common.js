$(function() {

$('#my-menu').mmenu({
		"extensions": ['theme-dark', 'effect-menu-slide', 'pagedim-black',"listview-huge","border-offset"],
		"navbar": {"title": "<h4>MoGo</h4>",},
		"navbars": [
            {
               "position": "top",
               
               // "content": [
               //    "searchfield"
               // ]
            }
         ],
     // "searchfield": {
     //        "showSubPanels": false,
     //        "showTextItems": true,
     //        "placeholder": "Search",
     //     },
      "offCanvas":{
            "position": "right"
      }
	});

var api = $('#my-menu').data('mmenu');

api.bind('open:finish', function(){
	$('.hamburger').addClass("is-active");
});

api.bind('close:finish', function(){
	$('.hamburger').removeClass("is-active");
});



// $(".hash-item a").click(function() {
//         $(".hash-item").removeClass("active");
//         $(".hash-item a").removeClass("active");
//         $(this).toggleClass("active");
//         $(this).parent().toggleClass("active");
//     })





$(".header.owl-carousel").owlCarousel({
  loop: true,
  items:1,
  center:true,
  URLhashListener:true,
 autoplayHoverPause:true,
startPosition: 'URLHash',
dots: false,
autoplay: true,
autoplayTimeout: 5000,
smartSpeed: 700,
autoplaySpeed: 1000,
});

var owl = $('.header.owl-carousel');
owl.owlCarousel();

owl.on('translated.owl.carousel', function(event) {
  $(".hash-item").removeClass("active");
  $(".hash-item a").removeClass("active");
  var a = $(".owl-item.active> .main-header-content").attr("data-hash");
  $('.hash-item a[href="#'+a+'"]').toggleClass("active").parent().toggleClass("active");
});


var searchClosed = true;
$('.btn-toggle-search').on('click', function() {

    $(this).toggleClass('open');
    $('.overlay').toggleClass('open');
    $('.search-toggle-menu').toggleClass('open');
    searchClosed = !searchClosed;

});



$(".about-wrapper").waypoint(function(){
	$({blurRadius: 5}).animate({blurRadius: 0}, {
	duration: 1200,
	easing: 'swing',
	step: function() {
		$(".blue-item span").css({
			"-webkit-filter": "blur("+this.blurRadius+"px)",
			"filter": "blur("+this.blurRadius+"px)"
		});
	}
});
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
$(".blue-item span").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad',
		numberStep: comma_separator_number_step},
		1200);
}); this.destroy();
}, {
		offset: '40%'
});

$('.item-header').click(function(event){
	$(this).next().slideToggle();
	$(this).removeClass('seen').toggleClass('open');
});


$(".item-content").mCustomScrollbar({
	theme: "dark"
});


$(".testimonal.owl-carousel").owlCarousel({
	items: 1,
	loop:true,
	lazyLoad:true,
	nav: true,
	navText: "",
	dots: false,
	loop: true,
	// autoplay: true,
	autoplayTimeout: 10000,
	autoplayHoverPause: true,
	smartSpeed:  700,
	fluidSpeed: 700,
	autoplaySpeed: 700,
	navSpeed: 700,
});

});


