/* CURRENTLY IN: javascript/main.js */
(function(){

$('img').hide();

$(document).ready(
	function( e ) {
		function anim() {
    	$("#wrap img").first().appendTo('#wrap').fadeOut(1000);
    	$("#wrap img").first().fadeIn(2000);    
    	setTimeout(anim, 6000);
		}
	anim();

});

/*$(document).ready(function() {
    $('#fullpage').fullpage();
});*/


/*

var changePic = $( '.more' );
var pix = $( '.container' );

$(document).ready(
	function( e ) {

		var pix = $( '.container' );

		var rando = Math.random();
		
		console.log( rando );

		if(rando < 0.5) { 
			pix.attr('class', '').addClass( 'container choiceOne' );
			//pix.addClass( 'choiceOne' );
		}
		else {
			pix.attr('class', '').addClass( 'container choiceTwo' );
			//pix.addClass( 'choiceTwo' );
		}

		//var pics = []
		//math.random() * pics.length

		//$('.container').css('background-image', 'url()'


	});/*




/*$(document).ready(function(){
  $('.bxslider').bxSlider({
  	minSlides: 1,
  	maxSlides: 1,
  	slideWidth: 350,
  	slideHeight: 200, 
  	slideMargin: 10
	});

});*/

})();