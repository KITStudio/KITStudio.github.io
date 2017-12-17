$(function() {

	var d = new Date();
var year = d.getFullYear();
$(".year").html(year);

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



	$(".blue-item-wrapper").waypoint(function(){
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
				1000);
		}); this.destroy();
	}, {
		offset: '90%'
	});

	$('.item-header').click(function(event){
		$(this).next().slideToggle();
		$(this).removeClass('seen').toggleClass('open');
	});


	$(".item-content").mCustomScrollbar({
		theme:"my-theme"
	});


	$(".testimonal.owl-carousel").owlCarousel({
		items: 1,
		loop:true,
		lazyLoad:true,
		nav: true,
		navText: "",
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplayHoverPause: true,
		smartSpeed:  700,
		fluidSpeed: 700,
		autoplaySpeed: 700,
		navSpeed: 700,
	});

	/********************** google map ******************/
	myMarker = 0;

	$('#map-content').click(function(){
		$(".map-wrapper").toggleClass('wrapper-open');
		$("#map").toggleClass('map-open');
		$(this).toggleClass('content-top');

		if($(this).hasClass("content-top"))
		{
			$(this).html('<i class="fas fa-times"></i> Close map');
		}
		else
		{ 
			$(this).html('<span ><i class="fas fa-map-marker-alt"></i></span> Open map');
		}

		var interval = setInterval( function(){ 
			google.maps.event.trigger(map, "resize");
			map.panTo(marker.getPosition());
			map.setCenter(marker.getPosition()); 
		}, 20);

		setTimeout(function(){		

			clearInterval(interval);



			if (myMarker == 0 ) {
				$('.section-map').scrollView();
				marker.setAnimation(google.maps.Animation.BOUNCE);
				marker.setVisible(true);
				myMarker= 1;

			} else if (myMarker == 1) {
				marker.setAnimation(null);
				myMarker =0;
				marker.setVisible(false);

			};

		}, 800);

	});


	$.fn.scrollView = function () {
		return this.each(function () {
			$('html, body').animate({
				scrollTop: $(this).offset().top - (($(window).height() - $('.section-map').height()) / 2 -40)
			}, 'slow','swing');
		});
	}


// $('.section-doing').addClass('animated slideInUp');

$(".story-about-us").waypoint(function() {

		$('.story-about-us h3').addClass('animated fadeInUp');

	}, {
		offset : "90%"
	});


$(".section-services").waypoint(function() {

		$('.section-services .h3').addClass('animated fadeInUp');

	}, {
		offset : "85%"
	});

$(".section-design").waypoint(function() {

		$('.section-design .h3').addClass('animated fadeInUp');

	}, {
		offset : "85%"
	});

$(".section-doing").waypoint(function() {

		$('.section-doing .h3').addClass('animated fadeInUp');

	}, {
		offset : "90%"
	});

$(".section-team").waypoint(function() {

		$('.section-team .h3').addClass('animated fadeInUp');

	}, {
		offset : "90%"
	});

$(".section-works").waypoint(function() {

		$('.section-works .h3').addClass('animated fadeInUp');

	}, {
		offset : "90%"
	});


$(".section-clients").waypoint(function() {

		$('.section-clients .h3').addClass('animated fadeInUp');

	}, {
		offset : "90%"
	});


$(".section-blog").waypoint(function() {

		$('.section-blog .h3').addClass('animated fadeInUp');

	}, {
		offset : "90%"
	});



});




