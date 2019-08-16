$(function(){
  $('.avatar .figure-wrapper').addClass('figure-wrapper_active');

  var slideNow = 1;
  var padding = 30;
  var paddingMedia = 35;
  var slideCount = $('.doing-and-work__item-wrap-2').children().length - 2;
  var slideCountWidth = $('.doing-and-work__item-wrap-2').width();
  var slideWidth = -$('.work__item').width() - padding;
  var translateWidth = 0;
  var navBtnId = 0;

  if(slideCountWidth < 1170) {
    slideWidth = (-1570 + slideCountWidth);
  }

  function nextSlide() {
    
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.work__item').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = (slideWidth) * (slideNow);
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

  $('.work__nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow) {
        translateWidth = (-$('.work__item').width() - paddingMedia) * (navBtnId);
        $('.work__item').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = navBtnId + 1;
        $('.work__nav-btn:first-child').removeClass('work__nav-btn_active');
    }
  });

  if($(window).width() < 1024) {

var initialPoint;
var finalPoint;
document.addEventListener('touchstart', function(event) {
event.preventDefault();
event.stopPropagation();
initialPoint=event.changedTouches[0];
}, false);
document.addEventListener('touchend', function(event) {
event.preventDefault();
event.stopPropagation();
finalPoint=event.changedTouches[0];
var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
if (xAbs > yAbs) {
  var slideCount = $('.doing-and-work__item-wrap-2').children().length;
if (finalPoint.pageX < initialPoint.pageX){
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $('.work__item').css('transform', 'translate(0, 0)');
    slideNow = 1;
    } else {
      slideWidth = $('.work__item').width() + padding;
      translateWidth = (-slideWidth) * (slideNow);
            $('.work__item').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
    }
}
else{
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
}
}
}, false);

  
  }

});