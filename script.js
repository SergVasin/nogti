$( document ).ready(function() {
	$(".source__img").click(function() {        
		$('.searh__item').toggleClass("searh__item__open");
	})
});

// =======ТАБЫ====

$(function() {
	var tab = $('.main__wr'); 
	tab.hide().filter(':first').show(); 

  // Клики по вкладкам.
  $('.main__tab-link').click(function(){
  	tab.hide(); 
  	tab.filter(this.hash).show(); 
  	$('.main__tab-link').removeClass('active__tab');
  	$(this).addClass('active__tab');
  	return false;
  }).filter(':first').click();
});

// плавный скролл

$('.scroll__deceleration').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
        );
    }
    return false;
});

// подсветка меню

$(document).ready(function () {
	var url = document.location.toString();
	$("[href='index.html']").filter(function () {
		return url.indexOf(this.href) != -1;
	}).addClass("current");
});

$(document).ready(function(){
  if(window.location.href.indexOf('category_b.html') > -1){
    $('.index').addClass('current');
  }
});

$(document).ready(function() {
  $('.learning-form__select').select2();
});

// попап

$( document ).ready(function() {
  $(".btn__default").click(function() {        
    $('.popup__learn').addClass("popup__open");
  })
});
$( document ).ready(function() {
  $(".learn__close").click(function() {        
    $('.popup__learn').removeClass("popup__open");
  })
});

$( document ).ready(function() {
  $(".btn__callme").click(function() {        
    $('.popup__callme').addClass("popup__open");
  })
});
$( document ).ready(function() {
  $(".callme__close").click(function() {        
    $('.popup__callme').removeClass("popup__open");
  })
});

$( document ).ready(function() {
  $(".btn__regis").click(function() {        
    $('.popup__regis').addClass("popup__open");
  })
});
$( document ).ready(function() {
  $(".regis__close").click(function() {        
    $('.popup__regis').removeClass("popup__open");
  })
});