$(document).ready(function(){$(".wp1").waypoint(function(){$(".wp1").addClass("animated fadeInLeft")},{offset:"75%"});$(".wp2").waypoint(function(){$(".wp2").addClass("animated fadeInDown")},{offset:"75%"});$(".wp3").waypoint(function(){$(".wp3").addClass("animated bounceInDown")},{offset:"75%"});$(".wp4").waypoint(function(){$(".wp4").addClass("animated fadeInDown")},{offset:"75%"});$("#featuresSlider").flickity({cellAlign:"left",contain:true,prevNextButtons:false});$("#showcaseSlider").flickity({cellAlign:"left",contain:true,prevNextButtons:false,imagesLoaded:true});$(".youtube-media").on("click",function(e){var t=$(window).width();if(t<=768){return}$.fancybox({href:this.href,padding:4,type:"iframe",href:this.href.replace(new RegExp("watch\\?v=","i"),"v/")});return false})});$(document).ready(function(){$("a.single_image").fancybox({padding:4})});$(".nav-toggle").click(function(){$(this).toggleClass("active");$(".overlay-boxify").toggleClass("open")});$(".overlay ul li a").click(function(){$(".nav-toggle").toggleClass("active");$(".overlay-boxify").toggleClass("open")});$(".overlay").click(function(){$(".nav-toggle").toggleClass("active");$(".overlay-boxify").toggleClass("open")});$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},2e3);return false}}})


$(function() { 
	$(window).scroll(function(){
	if ( $(this).scrollTop() > $(this).height() ){
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});

$('.top').click(function(){
	$('html,body').stop().animate({scrollTop: 0},'slow','swing');
});

});


function openCity(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();