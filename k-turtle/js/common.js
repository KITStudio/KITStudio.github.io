$(function() {
	$(document).ready(function(){
		setTimeout(function(){
			$(window).scrollTop(0);
			$('body').css('overflow','hidden');
			$('.owl-carousel').owlCarousel({
				items: 1,
				nav: true,
				navText: "",
				autoplay: true,
				loop: true
			});

			$('.header-item').equalHeights();

			//$('#loader').fadeOut(2500);

			$('#status').fadeOut(); // will first fade out the loading animation 
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
			
			$('html').css('height', 'auto');
			$('body').css('height', 'auto').css('overflow','unset').css('overflow-x', 'hidden');
		},1500);
	});


	$('.game_descr').mCustomScrollbar({
		theme: "inset-dark"
	});


	$('.cnt_int .fa-search').click(function(){
		$('.cnt_int').toggleClass('active');
	});


	
	$("#btn-mmnu").click(function() {
		$(this).toggleClass('is-active');
		$('.mobile-mnu').toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$('body').css('overflow', 'hidden').css('height', '100%');
			$('html').css('height', '100%');
		}else {
			$('body').css('overflow', 'unset').css('overflow-x', 'hidden').css('height', 'auto');
			$('html').css('height', 'auto');
		};
	});

	$(window).resize(function(){
		if($('#btn-mmnu').hasClass('is-active') && $(window).width() > 768) {
			$('.mobile-mnu').removeClass('is-active');
			$('.hamburger').removeClass('is-active');
			console.log($(window).width());
			console.log(typeof($(window).width()));
		};		
	});



});

