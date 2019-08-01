$(function(){

  var windowWidth = $(window).width();
  if( windowWidth <= 800 ) {
    $('.avatar__info-wrap').insertAfter($('.avatar'));
    $('.avatar img').prependTo($('.avatar'));
  }

  if( windowWidth <= 610 ) {
    $('.сallback').text('');
    $('.сallback').removeClass();
    $('header form button').addClass('сallback-small');
  }

  window.addEventListener("resize", function() {
		var windowWidth = $(window).width();
		if( windowWidth <= 800 ) {
      $('.avatar__info-wrap').insertAfter($('.avatar'));
      $('.avatar img').prependTo($('.avatar'));
		}else {
      $('.avatar__info-wrap').prependTo($('.relative'));
      $('.avatar img').prependTo($('.relative'));
    }
  }, false);

  window.addEventListener("resize", function() {
		var windowWidth = $(window).width();
		if( windowWidth <= 610 ) {
      $('.сallback').text('');
      $('.сallback').removeClass();
      $('header form button').addClass('сallback-small');
		}else {
      $('.сallback-small').text('Заказать звонок');
      $('.сallback-small').removeClass();
      $('header form button').addClass('сallback');
    }
  }, false);

});