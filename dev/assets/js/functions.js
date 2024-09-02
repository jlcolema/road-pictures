// Browser detection for when you get desparate.

// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// remap jQuery to $

(function($){

/* trigger when page is ready */

$(document).ready(function (){


	/*-------------------------------------------
		FitVids
	-------------------------------------------*/

    // Target your .container, .wrapper, .post, etc.

    $("#video .video").fitVids();

});


$(window).load(function() {


	/*-------------------------------------------
		Carousel for videos
	-------------------------------------------*/


	$("#videos .thumbnails").flexslider({

		animation: "slide",
		animationLoop: false,
		itemWidth: 151,
		slideshow: false,
		controlNav: false,
		minItems: 5,
		maxItems: 5,

		start: function(slider){

			$("body").removeClass("loading");

		}

	});


});

$(window).resize(function() {
	
});

})(window.jQuery);