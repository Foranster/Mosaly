jQuery( document ).ready(function($) {
	"use strict";
	


	/* Checking Form */

		/* validate field empty */
		$('.ovahotel_search').each(function(){
			$(this).validate();
		});

		$('.wrap-check-form select').select2();
		$('.ova_language select').select2();

		// disable untime
		function DisableDates(date) {
		    var string = $.datepicker.formatDate('yy-mm-dd', date);
		    if ( typeof date_untime != 'undefined' ) {
		    	return [date_untime.indexOf(string) == -1];
		    } else {
		    	return ['false'];
		    }
		    
		}

		var rtl = false;
		if( $('body').hasClass('rtl') ) rtl = true;

		$( ".ovahotel_search .datetpicker" ).each(function(){
			var today_date = $(this).data('today_date');
			$( this ).datepicker({
				dateFormat: "yy-mm-dd",
				isRTL: rtl,
				minDate: today_date,
				beforeShowDay: DisableDates,
				onSelect: function(dateStr){
					  var fulldate = $(this).datepicker('getDate');
					  var day_digit = $.datepicker.formatDate('dd', fulldate);
					  var m_y = $.datepicker.formatDate('MM, yy', fulldate);
					  var day_name = $.datepicker.formatDate('DD', fulldate);
					  
					  $(this).closest('.hotel_field_date').find( '.day_digit' ).html( day_digit );
					  $(this).closest('.hotel_field_date').find( '.m_y' ).html( m_y );
					  $(this).closest('.hotel_field_date').find( '.day_name' ).html( day_name );

					  var check_in = $( this ).closest('.wrap-check-form').find( '.room_check_in' ).val();
					  var check_out = $( this ).closest('.wrap-check-form').find( '.room_check_out' ).val();
					  var room_nights = datediff(check_out, check_in);	
					  
					  $(this).closest('.wrap-check-form').find( '.room_nights' ).html( room_nights );
				}
			});

		});

		


		function datediff(firstDate,secondDate) {

	          var startDay = new Date(firstDate);
	          var endDay = new Date(secondDate);
	          var millisecondsPerDay = 1000 * 60 * 60 * 24;

	          var millisBetween = startDay.getTime() - endDay.getTime();
	          var days = millisBetween / millisecondsPerDay;

	          // Round down.
	          var total_day = Math.floor(days);
	          if( total_day < 0 ){
	          	return 0;
	          }
	          return total_day;

		    
		}



		
		/* Calendar */
		if( typeof order_time != 'undefined' ){
			var rooms = JSON.parse( order_time );
			$('.hotel_product_calendar').each(function(){
				var nav = $(this).data('nav');
				var default_view = $(this).data('default_view');
				var more_text = $(this).data( 'more_text' );
				$(this).fullCalendar({
			      header: {
			        left: 'prev,next today ',
			        center: 'title',
			        right: nav
			      },
			      defaultView: default_view,
			      eventLimit: true,
			      events: rooms,
			      eventLimitText: more_text,
			      showNonCurrentDates: true,
			      views: {
				    month: {
				      eventLimit: 1 /* adjust to 6 only for agendaWeek/agendaDay */
				    },
				    agenda: {
				      eventLimit: 1 /* adjust to 6 only for agendaWeek/agendaDay */
				    },
				    week:{
				    	eventLimit: 1	
				    }
				  }
			    });

			});
		
		}

	/* Video PrettyPhoto */

	if( $("a[data-rel^='videoprettyPhoto']").length > 0 ){
	 	$("a[data-rel^='videoprettyPhoto']").prettyPhoto();
    }

    $(function(){
        var navOffset = $('.sticky-nav-tabs').offset();
		$(window).on('scroll',function(){
			var window_scrollTop = $(window).scrollTop();
			if($('div').hasClass('sticky-nav-tabs')){
            	if( window_scrollTop > navOffset.top){
                    $('.sticky-nav-tabs').addClass('fixed');
                }else{
                    $('.sticky-nav-tabs').removeClass('fixed');
                }
			}
			
			$('.tabs-section').each(function(i) {
				if ($(this).position().top <= window_scrollTop) {
					$('ul.sticky-nav-tabs-container li.active').removeClass('active');
					$('ul.sticky-nav-tabs-container li').eq(i).addClass('active');
				}
			});
			
		});

		$('ul.sticky-nav-tabs-container li a, a.scrollUp').click(function(e) { 	
		  	var targetHref = $(this).attr('href');
		  	var sticky_nav_Height = $("div#tab_section").height();
		  	
		  	if( $('#tab_section').hasClass( 'fixed' ) ){
		  		sticky_nav_Height = $("div#tab_section").height();
		  	}else{
		  		sticky_nav_Height = $("div#tab_section").height() + 79;
		  	}

		  	var scrollPosition = $(targetHref).offset().top - sticky_nav_Height ;
		  	 		

			$('html, body').animate({
				scrollTop: scrollPosition
			}, 1000);		    
		    e.preventDefault();
 	 	});

	});

	//Slider Galerry
	

	if( $('.list-image').length > 0 ){
	        $('.list-image').each(function(){

	        	var rtl = false;
	        	
			 	if( $('body').hasClass('rtl') ){
			 		rtl = true;
			 	}
			

	            $(this).owlCarousel({
	            	autoplay: true,
                	autoplayHoverPause: true,
	            	loop: true,
	            	margin: 30,	          
	                rtl: rtl,
	                dots: true, 
	                lazyLoadEager: 3,         
	                responsive:{
				        0:{
				            items:1,
				        },
				        768:{
				            items:2,
				            nav:false,
				            center: false,			            	
			            	autoWidth: false,
				        },
				        1200:{
				            items:3,				
				            center: true,
			            	autoWidth: true,
			            	nav: true,
			            	dots: false
				        }

				    }

	            });
			
	        });
    }

	 //Slick Slider Related Room

	 if($('.product_list_widget').length>0){
		$('.product_list_widget').each(function(){
			var rtl = false;
		 	if( $('body').hasClass('rtl') ){
		 		rtl = true;
		 	}
			$(this).owlCarousel({
                autoplay: true,
                autoplayHoverPause: true,
                loop: true,
                margin: 30,
                dots: true,
                nav: true,
                rtl: rtl,
                responsive:{
			        0:{
			            items:1
			        },
			        768:{
			            items: 2
			        },
			        1200:{
			        	items: 3
			        }
			    }
			});

		});
	}

});



