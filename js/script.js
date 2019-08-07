$(function(){

  var windowWidth = $(window).width();
  
  if( windowWidth <= 800 ) {
    $('.avatar__info-wrap').insertAfter($('.avatar'));
    $('.avatar img').prependTo($('.avatar'));
    $('.avatar__info-wrap .button-orange').addClass('button-center');
  }

  window.addEventListener("resize", function() {
		var windowWidth = $(window).width();
		if( windowWidth <= 800 ) {
      $('.avatar__info-wrap').insertAfter($('.avatar'));
      $('.avatar img').prependTo($('.avatar'));
      $('.avatar__info-wrap .button-orange').addClass('button-center');
		}else {
      $('.avatar__info-wrap').prependTo($('.relative'));
      $('.avatar img').prependTo($('.relative'));
      $('.avatar__info-wrap .button-orange').removeClass('button-center');
    }
  }, false);

});