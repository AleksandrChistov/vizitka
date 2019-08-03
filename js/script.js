$(function(){

  var windowWidth = $(window).width();
  
  if( windowWidth <= 800 ) {
    $('.avatar__info-wrap').insertAfter($('.avatar'));
    $('.avatar img').prependTo($('.avatar'));
    $('.avatar__info-wrap .button-orange').addClass('button-center');
  }

  if( windowWidth <= 610 ) {
    $('header .сallback').text('');
    $('header .сallback').removeClass();
    $('header form button').addClass('сallback-small');
    $('.social .сallback-footer').addClass('button-orange');
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

  window.addEventListener("resize", function() {
		var windowWidth = $(window).width();
		if( windowWidth <= 610 ) {
      $('header .сallback').text('');
      $('header .сallback').removeClass();
      $('header form button').addClass('сallback-small');
      $('.social .сallback-footer').addClass('button-orange');
		}else {
      $('.сallback-small').text('Заказать звонок');
      $('.сallback-small').removeClass();
      $('header form button').addClass('сallback');
      $('.social .сallback-footer').removeClass('button-orange');
    }
  }, false);

});