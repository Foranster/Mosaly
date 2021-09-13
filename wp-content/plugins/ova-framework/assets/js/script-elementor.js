(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {

		
		/* Menu Shrink */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_menu.default', function(){

			$( '.ova_menu_clasic .ova_openNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).removeClass( 'hide' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).addClass( 'show' );
				$( '.ova_menu_clasic  .ova_closeCanvas' ).css( 'width', '100%' );

				
				$( 'body' ).css( 'background-color', 'rgba(0,0,0,0.4)' );
				
			});

			$( '.ova_menu_clasic  .ova_closeNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).removeClass( 'show' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav' ).addClass( 'hide' );
				$( '.ova_closeCanvas' ).css( 'width', '0' );


				
				$( 'body' ).css( 'background-color', 'transparent' );
				
			});

			// Display in mobile
			$( '.ova_menu_clasic li.menu-item button.dropdown-toggle').off('click').on( 'click', function() {
			    $(this).parent().toggleClass('active_sub');
			});

        	if( $('.ovamenu_shrink').length > 0 && $( 'body' ).data('elementor-device-mode') == 'desktop' ){
				
				if( !$('.show_mask_header').hasClass( 'mask_header_shrink' ) ){
					$( '<div class="show_mask_header mask_header_shrink" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink');
					

				}

				
				var header = $('.ovamenu_shrink');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {
						
						var scroll = $(this).scrollTop();

						if (scroll >= header_shrink_height+150 ) {
							header.addClass( 'active_fixed' );
							$('.mask_header_shrink').css('height',header_shrink_height);
				        } else {
				            header.removeClass('active_fixed');
				            $('.mask_header_shrink').css('height','0');
				        }
				});
			}

			if( $('.ovamenu_shrink_mobile').length > 0 && $( 'body' ).data('elementor-device-mode') != 'desktop' ){
				
				if( !$('.show_mask_header_mobile').hasClass( 'mask_header_shrink_mobile' ) ){
					$( '<div class="show_mask_header_mobile mask_header_shrink_mobile" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink_mobile');
					console.log('x');
				}
				
				var header = $('.ovamenu_shrink_mobile');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {
						
						var scroll = $(this).scrollTop();

						if (scroll >= header_shrink_height+150 ) {
							header.addClass( 'active_fixed' );
							$('.mask_header_shrink_mobile').css('height',header_shrink_height);
				        } else {
				            header.removeClass('active_fixed');
				            $('.mask_header_shrink_mobile').css('height','0');
				        }
				});
			}



        });


        /* Menu Canvas */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_menu_canvas.default', function(){

			$( '.ova_menu_canvas .ova_openNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav_canvas' ).removeClass( 'hide' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav_canvas' ).addClass( 'show' );
				$( '.ova_menu_canvas .ova_closeCanvas' ).css( 'width', '100%' );

				$( this ).closest('.ova_wrap_nav').find( '.ova_nav_canvas' ).addClass('active');


				$( 'body' ).css( 'background-color', 'rgba(0,0,0,0.4)' );
				
			});

			$( '.ova_menu_canvas .ova_closeNav' ).on( 'click', function(){
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav_canvas' ).removeClass( 'show' );
				$( this ).closest('.ova_wrap_nav').find( '.ova_nav_canvas' ).addClass( 'hide' );
				$( '.ova_menu_canvas .ova_closeCanvas' ).css( 'width', '0' );

				$( this ).closest('.ova_wrap_nav').find( '.ova_nav_canvas' ).removeClass('active');


			
				$( 'body' ).css( 'background-color', 'transparent' );
				
			});

			// Display in mobile
			$( '.ova_menu_canvas li.menu-item button.dropdown-toggle').off('click').on( 'click', function() {
			    $(this).parent().toggleClass('active_sub');
			});
			
			if( $('.ovamenu_shrink').length > 0 && $( 'body' ).data('elementor-device-mode') == 'desktop' ){
				console.log( $( 'body' ).data('elementor-device-mode') );
				if( !$('.show_mask_header').hasClass( 'mask_header_shrink' ) ){
					$( '<div class="show_mask_header mask_header_shrink" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink');
					

				}

				
				var header = $('.ovamenu_shrink');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {
						
						var scroll = $(this).scrollTop();

						if (scroll >= header_shrink_height+150 ) {
							header.addClass( 'active_fixed' );
							$('.mask_header_shrink').css('height',header_shrink_height);
				        } else {
				            header.removeClass('active_fixed');
				            $('.mask_header_shrink').css('height','0');
				        }
				});
			}

			if( $('.ovamenu_shrink_mobile').length > 0 && $( 'body' ).data('elementor-device-mode') != 'desktop' ){
				
				if( !$('.show_mask_header_mobile').hasClass( 'mask_header_shrink_mobile' ) ){
					$( '<div class="show_mask_header_mobile mask_header_shrink_mobile" style="position: relative; height: 0;"></div>' ).insertAfter('.ovamenu_shrink_mobile');
					console.log('x');
				}
				
				var header = $('.ovamenu_shrink_mobile');
				var header_shrink_height = header.height();
				

				$(window).scroll(function () {
						
						var scroll = $(this).scrollTop();

						if (scroll >= header_shrink_height+150 ) {
							header.addClass( 'active_fixed' );
							$('.mask_header_shrink_mobile').css('height',header_shrink_height);
				        } else {
				            header.removeClass('active_fixed');
				            $('.mask_header_shrink_mobile').css('height','0');
				        }
				});
			}

        	

        });


        /* Slide Show */
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_slideshow.default', function(){

			

			function fadeInReset(element) {
				$(element).find('*[data-animation]').each(function(){
					var animation = $(this).data( 'animation' );
					$(this).removeClass( 'animated' );
					$(this).removeClass( animation );
					$(this).css({ opacity: 0 });
				});
			}

			function fadeIn(element) {

				// Sub Title
				var $title = $(element).find( '.active .elementor-slide-subtitle' )
				var animation_title = $title.data( 'animation' );
				var duration_title  = parseInt( $title.data( 'animation_dur' ) );
				

				setTimeout(function(){
		            $title.addClass(animation_title).addClass('animated').css({ opacity: 1 });
		      	}, duration_title);


		      	// Title
		      	var $sub_title = $(element).find( '.active .elementor-slide-title' );
		      	var animation_sub_title = $sub_title.data( 'animation' );
				var duration_sub_title  = parseInt( $sub_title.data( 'animation_dur' ) );
				

				setTimeout(function(){
		            $sub_title.addClass(animation_sub_title).addClass('animated').css({ opacity: 1 });
		      	}, duration_sub_title);
				
				// Description
				var $desc = $(element).find( '.active .elementor-slide-description' );
				var animation_desc = $desc.data( 'animation' );
				var duration_desc  = parseInt( $desc.data( 'animation_dur' ) );
				

				setTimeout(function(){
		            $desc.addClass(animation_desc).addClass('animated').css({ opacity: 1 });
		      	}, duration_desc);

		      	// Button
		      	var $button = $(element).find( '.active .elementor-slide-button' );
				var animation_button = $button.data( 'animation' );
				var duration_button  = parseInt( $button.data( 'animation_dur' ) );

				setTimeout(function(){
		            $button.addClass(animation_button).addClass('animated').css({ opacity: 1 });
		      	}, duration_button);

				
			}

		$(document).ready(function(){
			$('.elementor-slides').each(function(){

				var owl = $(this);
				var data = owl.data("owl_carousel");


				owl.on('initialized.owl.carousel', function(event) {
					
				    fadeIn(event.target);
				});
				
				console.log(data);

				owl.owlCarousel(
					data
				);
				

				owl.on('translate.owl.carousel', function(event){
				    fadeInReset(event.target);
				    owl.trigger('stop.owl.autoplay');
        			owl.trigger('play.owl.autoplay');
				});


				owl.on('translated.owl.carousel', function(event) {
				    fadeIn(event.target);
				    owl.trigger('stop.owl.autoplay');
        			owl.trigger('play.owl.autoplay');
				});


			});

			

			
		});
			
			


		});
		/* End Slide Show */




      

        /* Coundown Offers */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_offers_countdown.default', function(){
        	
        	var date = $('.due_date').data('day').split(' ');
        	var day = date[0].split('-');
        	var time = date[1].split(':');
        	var date_countdown = new Date( day[0], day[1]-1, day[2], time[0], time[1] );
        	
        	$('.due_date').countdown({until: date_countdown, format: 'DHMS'});

        	
        });
		/* Romm element */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_room_slider.default', function(){

			if( $('.hozing_product_slider').length > 0 ){  
				 $('.hozing_product_slider .owl-carousel').each(function(){

					var hozing_room_sl = $(this).data('options');
					var rtl            = false;
					
				 	if( $('body').hasClass('rtl') ){
				 		rtl = true;
				 	}
				 	
				 	$(this).owlCarousel({
						margin: hozing_room_sl.margin,
						smartSpeed: hozing_room_sl.smartSpeed,
						loop: hozing_room_sl.loop, 				        
						autoplay: hozing_room_sl.autoplay,
						autoplayTimeout: hozing_room_sl.autoplayTimeout,
						autoplayHoverPause: hozing_room_sl.autoplayHoverPause,
						dots: hozing_room_sl.dots,  
						nav: hozing_room_sl.nav,
						slideBy: hozing_room_sl.slideBy,
                        navText: [hozing_room_sl.prev,hozing_room_sl.next],
						rtl: rtl,						
					    responsive:{
					        0:{
					            items: hozing_room_sl.items_mobile
					        },
					        768:{
					            items: hozing_room_sl.items_ipad
					        },
					        1170:{
					        	items: hozing_room_sl.total_columns_slide,
					        	center: hozing_room_sl.center
					        }
					    }
					});

				 	function cal_prev_p(){

				 		if( !$('.hozing_wrap_product .hozing_product_slider').hasClass('.style6') ){

							var dots_w = $('.hozing_product_slider.style6 .owl-carousel').find( '.owl-dots' ).width();
							var owl_w  = $('.hozing_product_slider.style6 .owl-carousel').width();

							var prev_p = owl_w/2 - dots_w/2 - 131;
							$( '.hozing_product_slider.style6 .owl-carousel .owl-prev' ).css( 'left', prev_p );
							$( '.hozing_product_slider.style6 .owl-carousel .owl-next' ).css( 'right', prev_p );
					 	}
				 	}
				 	cal_prev_p();

				 	$(window).resize(function(){
				 		cal_prev_p();
				 	})
				 	
					
				});

				

			}

     	});

		/*  blog slider */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_blog_slider.default', function(){

        	$(".single-slider").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_df = {
		        	margin: 0, 
		        	responsive: false, 
		        	smartSpeed:500,
		        	autoplay:false,
		        	autoplayTimeout: 6000,
		        	items:1,
		        	loop:true, 
		        	nav: true, 
		        	dots: true,
		        	center:false,
		        	autoWidth:false,
		        	thumbs:false, 
		        	autoplayHoverPause: true,
		        	slideBy: 1,
		        };
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
		        owlsl_ops = $.extend({}, owlsl_df, owlsl_ops);
		        owlsl.owlCarousel({
		            autoWidth: owlsl_ops.autoWidth,
		            margin: owlsl_ops.margin,
		            items: owlsl_ops.items,
		            loop: owlsl_ops.loop,
		            autoplay: owlsl_ops.autoplay,
		            autoplayTimeout: owlsl_ops.autoplayTimeout,
		            center: owlsl_ops.center,
		            nav: owlsl_ops.nav,
		            dots: owlsl_ops.dots,
		            thumbs: owlsl_ops.thumbs,
		            autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		            slideBy: owlsl_ops.slideBy,
		            smartSpeed: owlsl_ops.smartSpeed,
		            navText:[
		            	'<i class="fa fa-angle-left" ></i>',
		            	'<i class="fa fa-angle-right" ></i>'
	            	],
	            	responsive: {
	                    0:    {
	                    	items: 1
	                    },
	                    479:  {
	                    	items: 1,
	                    	margin: 0,
	                    },
	                    768:  {
	                    	items: 2,
	                    	center: false,
	                    },
	                    1024: {items: 3}
	                }
		        });

		    });
			//carousel
        	
        });
        // end blog slider


        /*  service slider */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_service_slider.default', function(){

        	$(".single-slider").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_df = {
		        	margin: 0, 
		        	responsive: false, 
		        	smartSpeed:500,
		        	autoplay:false,
		        	autoplayTimeout: 6000,
		        	items:1,
		        	loop:true, 
		        	nav: true, 
		        	dots: true,
		        	center:false,
		        	autoWidth:false,
		        	thumbs:false, 
		        	autoplayHoverPause: true,
		        	slideBy: 1,
		        };
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
		        owlsl_ops = $.extend({}, owlsl_df, owlsl_ops);
		        owlsl.owlCarousel({
		            autoWidth: owlsl_ops.autoWidth,
		            margin: owlsl_ops.margin,
		            items: owlsl_ops.items,
		            loop: owlsl_ops.loop,
		            autoplay: owlsl_ops.autoplay,
		            autoplayTimeout: owlsl_ops.autoplayTimeout,
		            center: owlsl_ops.center,
		            nav: owlsl_ops.nav,
		            dots: owlsl_ops.dots,
		            thumbs: owlsl_ops.thumbs,
		            autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		            slideBy: owlsl_ops.slideBy,
		            smartSpeed: owlsl_ops.smartSpeed,
		            navText:[
		            	'<i class="fa fa-angle-left" ></i>',
		            	'<i class="fa fa-angle-right" ></i>'
	            	],
	            	responsive: {
	                    0:    {
	                    	items: 1
	                    },
	                    479:  {
	                    	items: 1,
	                    	margin: 0,
	                    },
	                    768:  {
	                    	items: 2,
	                    	center: false,
	                    },
	                    1024: {items: 3}
	                }
		        });

		    });
			//carousel
        	
        });
        // end service slider

        /* blog masonry */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova-blog-masory.default', function(){
			$('.grid').masonry({
				columnWidth: 200,
				itemSelector: '.grid-item'
			});
			// vanilla JS
			var msnry = new Masonry( '.grid', {
				columnWidth: 200,
				itemSelector: '.grid-item'
			});
        });
        // end blog-masonry

        /* Search Hotel */
        elementorFrontend.hooks.addAction('frontend/element_ready/ova_search.default', function(){
			$( '.wrap_search_hotel_popup i' ).on( 'click', function(){
				$( this ).closest( '.wrap_search_hotel_popup' ).addClass( 'show' );
			});

			$( '.btn_close' ).on( 'click', function(){
				$( this ).closest( '.wrap_search_hotel_popup' ).removeClass( 'show' );
				
			});
        });
        // end Search Hotel

        // slide Instagram
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_instagram.default', function(){
			$('.instagram .slide').each(function(){
				var owl = $(this);
				var data = owl.data('instagram_slide');
				// owl.owlCarousel();
				
				data.responsive = {
					0:{
						items:1
					},
					600:{
						items:2
					},            
					960:{
						items:3
					},
					1200:{
						items:5
					},
					1600:{
						items:7
					}
				};
				
				owl.owlCarousel(
					data
				);
			});
		}); 
		// end slide Instagram

		//slide testimonial
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_testimonial.default', function(){
			//testimonial carousel
			$(".testimo-slider").each(function(){
		        var owlsl = $(this) ;
		        var owlsl_df = {
		        	margin: 0, 
		        	responsive: false, 
		        	smartSpeed:500,
		        	autoplay:false,
		        	autoplayTimeout: 6000,
		        	items:1,
		        	loop:true, 
		        	nav: true, 
		        	dots: true,
		        	center:false,
		        	autoWidth:false,
		        	thumbs:false, 
		        	autoplayHoverPause: true,
		        	slideBy: 1,
		        };
		        var owlsl_ops = owlsl.data('options') ? owlsl.data('options') : {};
		        owlsl_ops = $.extend({}, owlsl_df, owlsl_ops);
		        owlsl.owlCarousel({
		            autoWidth: owlsl_ops.autoWidth,
		            margin: owlsl_ops.margin,
		            items: owlsl_ops.items,
		            loop: owlsl_ops.loop,
		            autoplay: owlsl_ops.autoplay,
		            autoplayTimeout: owlsl_ops.autoplayTimeout,
		            center: owlsl_ops.center,
		            nav: owlsl_ops.nav,
		            dots: owlsl_ops.dots,
		            thumbs: owlsl_ops.thumbs,
		            autoplayHoverPause: owlsl_ops.autoplayHoverPause,
		            slideBy: owlsl_ops.slideBy,
		            smartSpeed: owlsl_ops.smartSpeed,
		            navText:[
		            	'<i class="fa fa-angle-left" ></i>',
		            	'<i class="fa fa-angle-right" ></i>'
	            	],
		        });

		    });
		});
		//end slide testimonial

		//service tab
		
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_service_tab.default', function(){

			$( ".service-tab-title:first-child" ).addClass('active');
			$( ".service-tab-content:first-child" ).addClass('active');
			$( ".service-tab-title" ).click(function() {
				$('.service-tab-content').removeClass('active');
				$('.service-tab-content').hide();

				$('.service-tab-title').removeClass('active');
				$(this).addClass('active');
				var id = $(this).attr('id');
				$('#service-tab-content-' + id).fadeIn();
			});
		});
		// end service tab

		//price table
		elementorFrontend.hooks.addAction('frontend/element_ready/ova_price_table.default', function(){
			var height_table = 0;
			var current_height;
			$('.ova-price-table').each(function(){
				current_height = $(this).height();
				height_table = (height_table > current_height) ? height_table : current_height;
			});

			$('.ova-price-table').css('min-height', height_table + 'px');
			$('.ova-price-table').on("hover", function(){
				$('.ova-price-table').removeClass('active');
				$(this).addClass('active');
			});
		});
		//end price table
		

   });

})(jQuery);
