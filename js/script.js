$(function(){
  $('.avatar .figure-wrapper').addClass('figure-wrapper_active');

  var slideNow = 1;
  var slideCount = $('.doing-and-work__item-wrap-2').children().length;
  var slideWidth = $('.work__item').width();
  var slideFirst = 0;
  
  $('.arrow_right').click(function(){
    nextSlide();
  });

  $('.arrow_left').click(function(){
    prevSlide();
  });

  

  function nextSlide() {
    if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = (slideWidth + 30) * 0;
      $('.work__item').css({
        'transform': 'translate(0,0)',
        '-o-transform': 'translate(0,0)',
        '-webkit-transform': 'translate(0,0)'
      });
      slideNow = 1;
    } else {
      translateWidth = (slideWidth + 30) * (slideNow);
      $('.work__item').css({
        'transform': 'translate('+translateWidth+'px,0)',
        '-o-transform': 'translate('+translateWidth+'px,0)',
        '-webkit-transform': 'translate('+translateWidth+'px,0)'
      });
      slideNow++;  
    }
  }

  function prevSlide() {
    if(slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('.work__item').css({
        'transform': 'translate(0,0)',
        '-o-transform': 'translate(0,0)',
        '-webkit-transform': 'translate(0,0)'
      });
      slideNow = 1;
      slideFirst = 0;
      setTimeout(function() {
        $('.work__item:eq(3), .work__item:eq(4)').remove();
        }, 700);
    } else {
      var translateWidth2 = (-slideWidth - 30) * (slideNow);
      $('.work__item').css({
        'transform': 'translate('+translateWidth2+'px,0)',
        '-o-transform': 'translate('+translateWidth2+'px,0)',
        '-webkit-transform': 'translate('+translateWidth2+'px,0)'
      });
      $('.work__item').eq(slideFirst).clone().delay(700).queue(function() {
        $(this).appendTo('.doing-and-work__item-wrap-2');
        slideFirst++;
        slideNow++;
      });
    }
  }
  
});