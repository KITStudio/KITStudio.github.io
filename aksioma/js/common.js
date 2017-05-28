var data = [
{
		title: 'Исскуство стрижки',
		start: '2016-04-10',
		end: '2016-04-15'
	},
	{
		title: 'Исскуство стрижки',
		start: '2016-05-01'
	},
	{
		title: 'Исскуство стрижки Вологда',
		start: '2016-05-02',
		end: '2016-05-05'
	},
	{
		id: 999,
		title: 'Repeating Event',
		start: '2016-05-07T16:00:00'
	},
	{
		id: 999,
		title: 'Repeating Event',
		start: '2015-05-10T16:00:00'
	},
	{
		title: 'Conference',
		start: '2016-05-11',
		end: '2016-05-14'
	},
	{
		title: 'Meeting',
		start: '2016-05-16T10:30:00',
		end: '2016-05-16T12:30:00'
	},
	{
		title: 'Lunch',
		start: '2016-05-20T12:00:00'
	},
	{
		title: 'Meeting',
		start: '2016-02-20T14:30:00'
	},
	{
		title: 'Happy Hour',
		start: '2016-05-22T17:30:00'
	},
	{
		title: 'Dinner',
		start: '2015-05-24T20:00:00'
	},
	{
		title: 'Birthday Party Далеко-далеко за словесными горами в стране',
		start: '2016-05-25T07:00:00'
	},
	{
		title: 'Click for Google',
		url: 'http://google.com/',
		start: '2016-05-28',
		end: '2016-05-31'
	}
];





$(function() {

/*Calendar*/
$("#calendar").fullCalendar({
	  dayClick: function(date, jsEvent, view){
	  	var clickDate = date.format();
	  	$('#start').val(clickDate);
	  	$('#dialog').dialog('open');
	  	/*$.ajax({
	        	url : 'index.php',
	        	type: 'POST',
	        	data : {clickDate : clickDate},
	        	success : function(res){
	        		console.log(res);
	        	},
	        	error : function(){
	        		alert('Error!');
	        	}
	        });*/
		 },
		theme: true,
		 events: data,
		 editable: true,
});
$('#dialog').dialog({
	autoOpen: false,
	show: {
		effect: 'blind',
		duration: 500
	},
	hide: {
		effect: 'clip',
		duration: 500
	},
	modal: true,
});
$('.datepicker').datepicker({
	dateFormat: 'yy-mm-dd'
});
/*end*/

	$(".subscribe-item").equalHeights();
	$(".teaser-content").equalHeights();
	$(".service-item-content").equalHeights();
	$(".teaser-item").equalHeights();
	$(".video-content").equalHeights();
	$(".curses-item").equalHeights();
	$(".teaser-img-wrap img").equalHeights();

/* popup*/

$("a[href=#callback]").click(function(){
			$("#callback .forname").val($(this).data("form"));
		});
$('a[href=#callback]').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".succes").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".succes").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

/* end popup */


// menu

	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 1200 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
//menu

	var owl = $(".slider");
	owl.owlCarousel({
	 	loop: true,
	 	items: 1,
	 	itemClass: "slide-wrap",
	 	nav: true,
	 	navText: '',
	 	autoplay: true,
	 	autoplayTimeout: 7000,
	 	autoplayHoverPause: false,
	 	smartSpeed: 500,
	 });
	$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


$(".preloader").fadeOut();
$('#lightgallery').lightGallery({
    videojs: true,
    escKey: true,
    thumbnail:true,
    animateThumb: true,
    showThumbByDefault: false
});


});



