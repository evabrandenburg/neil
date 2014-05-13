/* CURRENTLY IN: javascript/main.js */
(function(){

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


	});

})();