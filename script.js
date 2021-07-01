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


$(document).ready(function(){
  $(".review__wr").owlCarousel({
    items: 2,
    loop: true,
    dots: false,
    smartSpeed: 300,
    responsive:{
      0:{
        items:1
      },
      930:{
        items:2
      },
    }
  });

    var owl = $('.review__wr');
    owl.owlCarousel();
    $('.item__NextBtn').click(function() {
       owl.trigger('next.owl.carousel');
   })
    $('.item__PrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    })

});


$( document ).ready(function() {
  $(".answer__item-qw").click(function() {
    $(this).toggleClass("answer__item-qw-add");
    $(this).parents().eq(0).find('.answer__item-an').toggleClass("answer__item-an-add");
  })
});

$( document ).ready(function() {
  $(".nav__btn").click(function() {        
    $('.header__wr').addClass("header__wr-plus");
  })
});
$( document ).ready(function() {
  $(".header__close, .forum-link, .enter, .phone").click(function() {        
    $('.header__wr').removeClass("header__wr-plus");
  })
});


$( document ).ready(function() {
  $(".footer__link-link").click(function() {
    $('.footer__link-link').removeClass("footer__link-link-add");
    $(this).addClass("footer__link-link-add");
  })
});