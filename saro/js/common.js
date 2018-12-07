
$(function() {


	$('.btn-menu').click(function(){
		$('body').toggleClass('show');  
	})

	$('.mobile-menu a').click(function(){
		$('body').toggleClass('show');
		$('.mobile-menu li').removeClass('active');
		$(this).parent().addClass('active');

	})

	$(document).on('click', '#moveDown', function(){
		fullpage_api.moveSectionDown();
	});


$(".our-products").click(function(){
	fullpage_api.moveTo(3);
	});


jQuery("#gallery").unitegallery({
					theme_enable_text_panel: false,
					gallery_height:400,
					gallery_width:1140,
					theme_hide_panel_under_width: 480,
					gallery_autoplay:true,
					gallery_play_interval: 5000,
					slider_control_zoom:false,
					thumb_height:30,
					thumb_width:60,
			});

jQuery("#gallery-greed").unitegallery({
		 				lightbox_type: "compact",
		 				theme_enable_text_panel: false,
		 				lightbox_arrows_offset: 100,
		 				grid_num_rows:2,
		 				lightbox_slider_image_border_width: 3,
		 				lightbox_show_textpanel: false,
		 				gallery_theme: "tilesgrid",
		 				tile_border_width:2,
		 				tile_shadow_blur:1,
						tile_shadow_spread:1,
			});

});

var myFullpage = new fullpage('#fullpage', {
	anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage','5rdPage'],
        // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['First page', 'Second page', 'Third and last page'],
        menu: '#menu',
        lazyLoad: true,
        loopBottom: true,
        // loopTop: true
      });














