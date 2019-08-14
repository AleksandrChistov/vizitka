$(function(){
  $('.avatar .figure-wrapper').addClass('figure-wrapper_active');

  var slideNow = 1;
  var padding = 30;
  var slideCount = $('.doing-and-work__item-wrap-2').children().length - 2;
  var translateWidth = 0;

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.work__item').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = (-$('.work__item').width() - padding) * (slideNow);
        $('.work__item').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
  }

  $('.arrow_right').click(function() {
    nextSlide();
  });

  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = (-$('.work__item').width() - padding) * (slideCount - 1);
        $('.work__item').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = (-$('.work__item').width() - padding) * (slideNow - 2);
        $('.work__item').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
  }

  $('.arrow_left').click(function() {
    prevSlide();
  });
  
});