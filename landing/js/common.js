$(document).ready(function() {

	$("#portfolio-grid").mixItUp();

	$(".s-portfolio li").click(function() {
		$(".s-portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup-content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".section-header").animated("fadeInUp", "fadeOutDown");

	$(".animation-1").animated("flipInY", "fadeOutDown");
	$(".animation-2").animated("fadeInLeft", "fadeOutDown");
	$(".animation-3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume-item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume-item").animated("fadeInRight", "fadeOutDown");

	function heightDetect() {
		$(".main-head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle-mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top-mnu ul a").click(function() {
		$(".top-mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top-text").css("opacity", "1");
	}).append("<span>");

	$(".toggle-mnu").click(function() {
		if ($(".top-mnu").is(":visible")) {
			$(".top-text").css("opacity", "1");
			$(".top-mnu").fadeOut(600);
			$(".top-mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").css("opacity", ".1");
			$(".top-mnu").fadeIn(600);
			$(".top-mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".portfolio-item").each(function(i) {
		$(this).find("a").attr("href", "#work-" + i);
		$(this).find(".podrt-descr").attr("id", "work-" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top-mnu ul a").mPageScroll2id();

});
$(window).load(function() {

	$(".loader-inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top-text h1").animated("fadeInDown", "fadeOutUp");
	$(".top-text p").animated("fadeInUp", "fadeOutDown");

}); 