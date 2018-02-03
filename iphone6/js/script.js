$(function(){
	"use strict";
	
	
	var scrollOffset = 100;
	
	$(window).on('scroll', function(){
		
		/*=========================================================================
			Change navigation bar from transparent to white
		=========================================================================*/
		if( $(window).scrollTop() < scrollOffset ){
			$('body').removeClass('scrolled');
		}else{
			$('body').addClass('scrolled');
		}
		
		/*=========================================================================
			Navbar ScrollSpy
		=========================================================================*/
		var scrollPos = $(document).scrollTop(),
			nav_height = $('#navbar').outerHeight();
		
		$('.navbar li a').each(function () {
			var currLink = $(this),
				refElement = $(currLink.attr('href'));
			if( refElement.size() > 0 ){
				if ( ( refElement.position().top - nav_height ) <= scrollPos ) {
					$('.navbar li').removeClass('active');
					currLink.closest('li').addClass('active');
				}else{
					currLink.removeClass('active');
				}
			}
		});
		
		
	});
	
	
	//Initialize smoothscroll plugin
	smoothScroll.init({
		updateURL: false
	});
	
	
	/*=========================================================================
		WOW.js initialization
	=========================================================================*/
	new WOW().init({
		mobile: false
	});
	
	
	/*=========================================================================
		AjaxChimp (For mailchimp subscribe form)
	=========================================================================*/
	$('.newsletter-form').ajaxChimp();
	
	
	/*=========================================================================
		Magnific Popup (Project Popup initialization)
	=========================================================================*/
	$('.view-btn').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
			  return openerElement.is('img') ? openerElement : openerElement.closest('figure').find('img');
			}
		  }
	});
	
	
	/*=========================================================================
		Video Section Video Popup
	=========================================================================*/
	$('.play-btn').magnificPopup({
		type: 'iframe'
	});
	
	
	/*=========================================================================
		Hide Preloader When Page Is Loaded
	=========================================================================*/
	$(window).on('load',function(){
		$('body').addClass('loaded');
	});
	
	
	/*=========================================================================
		Initialize Material Design Ripples
	=========================================================================*/
	Waves.attach('.btn-custom', 'waves-classic');
	Waves.init();
	
	/*=========================================================================
		Screenshots Slider
	=========================================================================*/
	$('.screenshots-slider').owlCarousel({
		center: true,
		items:2,
		loop:false,
		margin:15,
		startPosition: 1,
		responsive:{
			600:{
				items:4
			},
			0: {
				startPosition: 0
			}
		}
	});
	
	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	$('.testimonials-slider').owlCarousel({
		items: 1,
		loop: true,
		startPosition: 1
	});
	
	$(window).on('resize', function(){
		
		// To fix the parallax.js bug
		window.setTimeout(function(){
			$(window).resize();
		},500);
	
	});
	
	// To fix the parallax.js bug
	var isMobile = {
		Android: function() { return navigator.userAgent.match(/Android/i); }, 
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
		any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
    jQuery(function($) {
        if (isMobile.any()) {
			document.documentElement.className = document.documentElement.className + " touch";
            $('.parallax').each(function(i, obj) {
                $(this).css("background-image", 'url('+$(this).data('image-src')+')');
                $(this).css("background-color", "#FFFFFF");
                $(this).css("background-size", "cover");
                $(this).css("background-position", "center center");
            });
        }
	});
	
	
	
	
	/*=========================================================================
		Contact Form
	=========================================================================*/
	function isJSON(val){
		var str = val.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
		return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
	}
	$('#contact-form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			// If there is no any error in validation then send the message
			e.preventDefault();
			var $this = $(this),
				//You can edit alerts here
				alerts = {
					success: 
					"<div class='form-group' >\
						<div class='alert alert-success' role='alert'> \
							<strong>Message Sent!</strong> We'll be in touch as soon as possible\
						</div>\
					</div>",
					error: 
					"<div class='form-group' >\
						<div class='alert alert-danger' role='alert'> \
							<strong>Oops!</strong> Sorry, an error occurred. Try again.\
						</div>\
					</div>"
				};
			$.ajax({
				url: 'mail.php',
				type: 'post',
				data: $this.serialize(),
				success: function(data){
					if( isJSON(data) ){
						data = $.parseJSON(data);
						if(data['error'] == false){
							$('#contact-form-result').html(alerts.success);
							$('#contact-form').trigger('reset');
						}else{
							$('#contact-form-result').html(
							"<div class='form-group' >\
								<div class='alert alert-danger alert-dismissible' role='alert'> \
									<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
										<i class='ion-ios-close-empty' ></i> \
									</button> \
									"+ data['error'] +"\
								</div>\
							</div>"
							);
						}
					}else{
						$('#contact-form-result').html(alerts.error);
					}
				},
				error: function(){
					$('#contact-form-result').html(alerts.error);
				}
			});
		}
	});
	
	
	/*=========================================================================
		Particle BG Code
	=========================================================================*/
	var particlesSettings = {
		particles: {
			number: {
				value: 30,
				density: {
					enable: !0,
					value_area: 800
				}
			},
			color: {
				value: "#FFF"
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#F0F0F0"
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: .5,
				random: !1,
				anim: {
					enable: !1,
					speed: .5,
					opacity_min: .1,
					sync: !1
				}
			},
			size: {
				value: 3,
				random: !0,
				anim: {
					enable: !1,
					speed: 10,
					size_min: .1,
					sync: !1
				}
			},
			line_linked: {
				enable: !0,
				distance: 150,
				color: "#FFF",
				opacity: .4,
				width: 1
			},
			move: {
				enable: !0,
				speed: 1,
				direction: "none",
				random: !1,
				straight: !1,
				out_mode: "out",
				bounce: !1,
				attract: {
					enable: !1,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: !0,
					mode: "grab"
				},
				onclick: {
					enable: !0,
					mode: "push"
				},
				resize: !0
			},
			modes: {
				grab: {
					distance: 140,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 1.5
				},
				repulse: {
					distance: 200,
					duration: .4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: !0
	};
	if( $('#particles').length != 0 ){
		particlesJS('particles', particlesSettings);		
	}

/*******************************************************************/
$('select').selectize({
	create: true,
})


function displayVals() {
  var country = $( "#select-country" ).val();
 if (country == "Белоруссия"){
 	$(".price").html("<span> 15 768 500 BYN.</span> 14 138 555 BYN.</div>").css("font-size", "2.2rem"); }
 	else if (country == "Украина"){
 	$(".price").html("<span> 20 685 грн. </span> 18 550 грн.</div>").css("font-size", "2.5rem");
 } else {
 	$(".price").html("<span> 44 600 руб </span> 39 990 руб</div>").css("font-size", "2.5rem");
 }
}
 
$( "select" ).change( displayVals );

/*******************************************************************/	


});



/**************************************** time left begin ************************************/

function cdtime(targetDate){
	var thisobj=this
	this.syncinfo = {afterSec:300, currentSec:0} // resync current time with user's computer time after every x seconds (afterSec prop)
	this.targetDate = new Date(targetDate)
	this.currentDate = ''
	this.oncountdown = function(ms){}
	this.diff
}


cdtime.prototype.getDifference=function(){
	this.diff = this.targetDate - this.currentDate
}

cdtime.prototype.startCount = function(){
	var thisobj = this
	var syncinfo = this.syncinfo
	var updatetimer = setInterval(function(){ // update countdown every second
		if (syncinfo.currentSec >= syncinfo.afterSec){ // sync currentDate with time on user computer?
			thisobj.currentDate = new Date()
			syncinfo.currentSec = 0
		}
		else{
			thisobj.currentDate.setSeconds( thisobj.currentDate.getSeconds() + 1 )
		}
		thisobj.getDifference()
		thisobj.oncountdown(thisobj.diff)
		syncinfo.currentSec++
		if (thisobj.diff <= 0){
			clearInterval(updatetimer)
		}
	}, 1000) //update every second
}

cdtime.prototype.start = function(){
	this.currentDate = new Date()
	this.getDifference()
	this.oncountdown(this.diff)
	if (this.diff > 0){
		this.startCount()
	}
}

cdtime.formatDuration = function(ms, baseunit){
	/*
	Usage: cdtime.formatDuration(ms, baseunit)
		1) ms param: Time left in milliseconds
		2) baseunit: The topmost unit to calculate the remaining time using: "days", "hours", "minutes", or "seconds"
				If baseunit is "hours" for example, function will calculate the number of hours plus minutes plus seconds left for the specified ms duration
				If baseunit is "minutes" for example, function will calculate the number of minutes plus seconds left for the specified ms duration

	Returns: object containing the time left in the specified baseunit plus sub units. Other units will return "n/a"
		{
			days: int,
			hours: int,
			minutes: int,
			seconds: int
		}
	*/
	var timediff = ms/1000 // time remaining in sec
	var oneMinute=60 //minute unit in seconds
	var oneHour=60*60 //hour unit in seconds
	var oneDay=60*60*24 //day unit in seconds
	var dayfield=Math.floor(timediff/oneDay)
	var hourfield=Math.floor((timediff-dayfield*oneDay)/oneHour)
	var minutefield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour)/oneMinute)
	var secondfield=Math.floor((timediff-dayfield*oneDay-hourfield*oneHour-minutefield*oneMinute))
	if (baseunit=="hours"){ //if base unit is hours, set "hourfield" to be topmost level
		hourfield=dayfield*24+hourfield
		dayfield="n/a"
	}
	else if (baseunit=="minutes"){ //if base unit is minutes, set "minutefield" to be topmost level
		minutefield=dayfield*24*60+hourfield*60+minutefield
		dayfield=hourfield="n/a"
	}
	else if (baseunit=="seconds"){ //if base unit is seconds, set "secondfield" to be topmost level
		var secondfield=timediff
		dayfield=hourfield=minutefield="n/a"
	}
	return{
		days: dayfield,
		hours: hourfield,
		minutes: minutefield,
		seconds: secondfield
	}
}

document.addEventListener('DOMContentLoaded', function(){
  var christmascounter = document.getElementById('christmascounter')
  var daysdiv = christmascounter.querySelector('.days')
  var hoursdiv = christmascounter.querySelector('.hours')
  var minutesdiv = christmascounter.querySelector('.minutes')
  var secondsdiv = christmascounter.querySelector('.seconds')

  function padandwrap(number){
    // padandwrap function
    // 1) Pads single digit numbers with 0
    // 2) Converts each number to string and wrapped in a DIV (ie: 19 becomes <div>1</div><div>9</div>) and returns it
    var output = ''
    var numstr = (number <=9)? '0' + number : String(number)
    for (var i=0; i<numstr.length; i++){
      output += '<div>' + numstr.charAt(i) + '</div>\n'
    }
    return output
  }

  var today = new Date()
  var christmasyear = today.getFullYear()
  if (today.getMonth() == 11 && today.getDate() > 25){
    christmasyear += 1
  }

  var christmas = new cdtime("2018-12-25 00:00:00")
  christmas.oncountdown = function(ms){
    if (ms <= 0){ // if time's up
      alert("2016 Christmas is Upon Us!") // do something
    }
    else{
      var timeleft = cdtime.formatDuration(ms, "days") // format time using formatDuration(timeleftms, "baseunit") function
      if (timeleft.days != 'n/a'){
        daysdiv.innerHTML = padandwrap( timeleft.days )
      }
      if (timeleft.hours != 'n/a'){
        hoursdiv.innerHTML = padandwrap( timeleft.hours )
      }
      if (timeleft.minutes != 'n/a'){
        minutesdiv.innerHTML = padandwrap( timeleft.minutes )
      }
      secondsdiv.innerHTML = padandwrap( timeleft.seconds )
    }
  }
  christmas.start()
})


/************************************ time left end *********************************/




document.getElementById('range-picker').addEventListener('click', function(e) {
  var sizeList = document.getElementById('range-picker').children;
  for (var i = 0; i <= sizeList.length - 1; i++) {
    console.log(sizeList[i].classList);
    if (sizeList[i].classList.contains('active')) {
      sizeList[i].classList.remove('active');
    }
  }
  e.target.classList.add('active');
})

document.getElementById('color-a').addEventListener('click', function() {
  document.getElementById('color-overlay').style.transform = 'translateX(-0px)';
  document.getElementById('color-name').innerHTML = "Silver";
  document.getElementById('color-input').value = 'Silver';
  document.getElementById("product-img").style.backgroundImage = "url('./img/iphone/iphone6s-silver.jpg')";

})
document.getElementById('color-b').addEventListener('click', function() {
  document.getElementById('color-overlay').style.transform = 'translateX(45px)';
  document.getElementById('color-name').innerHTML = "Rosegold";
  document.getElementById('color-input').value = 'Rosegold';
  document.getElementById("product-img").style.backgroundImage = "url('./img/iphone/iphone-rosegold.jpg')";
})

document.getElementById('color-c').addEventListener('click', function() {
  document.getElementById('color-overlay').style.transform = 'translateX(90px)';
  document.getElementById('color-name').innerHTML = "Gold";
  document.getElementById('color-input').value = 'Gold';
  document.getElementById("product-img").style.backgroundImage = "url('./img/iphone/iphone6s-gold.jpg')";
})
document.getElementById('color-d').addEventListener('click', function() {
  document.getElementById('color-overlay').style.transform = 'translateX(134px)';
  document.getElementById('color-name').innerHTML = "Spacegray";
  document.getElementById('color-input').value = 'Spacegray';
  document.getElementById("product-img").style.backgroundImage = "url('./img/iphone/iphone6s-spacegray.jpg')";
})




