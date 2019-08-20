$(function(){
  
  // Анимация при загрузке страницы
  $('.avatar .figure-wrapper').addClass('figure-wrapper_active');

  // Слайдер
  const mySiema = new Siema();

  document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
  document.querySelector('.next').addEventListener('click', () => mySiema.next());
  
  // Слайдер на экранах меньше 1025px
  if( window.innerWidth <= 1024 ){
      Siema.prototype.addPagination = function() {
    for (let i = 0; i < this.innerElements.length; i++) {
      const btn = document.createElement('button');
      btn.className = 'work__btn';
      btn.addEventListener('click', () => this.goTo(i));
      this.selector.appendChild(btn);
      $('.work__btn').first().addClass('work__btn_active');
    }
  };
  mySiema.addPagination();
  }

  // Маска для ввода телефона
  var phoneInput = document.querySelector('.popup__phone');
  phoneInput.addEventListener('keydown', function(event) {
    if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault(); }
    var mask = '+7 (111) 111-11-11';
 
      if (/[0-9\+\ \-\(\)]/.test(event.key)) {
          var currentString = this.value;
          var currentLength = currentString.length;
          if (/[0-9]/.test(event.key)) {
              if (mask[currentLength] == '1') {
                  this.value = currentString + event.key;
              } else {
                  for (var i=currentLength; i<mask.length; i++) {
                  if (mask[i] == '1') {
                      this.value = currentString + event.key;
                      break;
                  }
                  currentString += mask[i];
                  }
              }
          }
      } 
  });

  // Всплывающее окно с формой
  var overlay = $('.overlay'),
      modal = $('.popup'),
      link = $('.сallback'),
      close = $('.popup__close-btn'),
      order = $('#order'),
      popupButton = $('.popup__button');
  var element = '<input class="popup__email" type="email" placeholder="Ваш e-mail" name="email" id="email" required="">';
  
  link.on('click', function(){
    overlay.show('slow');
    modal.toggleClass('popup_active');
    if($('input').is('.popup__email') == true) {
      $('.popup__email').remove();
    }
  });

  order.on('click', function(){
    overlay.show('slow');
    modal.toggleClass('popup_active');
    if($('input').is('.popup__email') !== true) {
      popupButton.before($(element));
    }
  });

  close.on('click', function(){
    overlay.hide('slow');
    modal.toggleClass('popup_active');
  });

  // Мобильное меню
  var toggleMenu = $('.header__toggle-menu'),
      menu = $('.menu'),
      menuClose = $('.menu__close-btn'),
      navLink = $('.menu__item a');
  
  toggleMenu.click(function(){
    menu.toggleClass('menu_active');
  });

  menuClose.click(function(){
    menu.toggleClass('menu_active');
  });

  navLink.on('click', function(event){
    event.preventDefault();
    var anchor = $(this).attr('href'),
        top = $(anchor).offset().top;
    $('html,body').animate({scrollTop: top}, 500);
  });

  // Скролл для навигационных ссылок в футере
  var footerLink = $('.links__item');
  footerLink.on('click', function(event){
    event.preventDefault();
    var anchorLink = $(this).attr('href'),
        topLink = $(anchorLink).offset().top;
    $('html,body').animate({scrollTop: topLink}, 500);
  });
  // Скролл для кнопок orange
  var buttonLink = $('.button_link');
  buttonLink.on('click', function(event){
    event.preventDefault();
    var anchorButton = $(this).attr('href'),
        buttonLink = $(anchorButton).offset().top;
    $('html,body').animate({scrollTop: buttonLink}, 500);
  });

});