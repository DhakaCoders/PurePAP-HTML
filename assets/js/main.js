(function($) {
var windowWidth = $(window).width();
$('.humberger-menu-btn').on('click', function(){
	$('.main-nav').slideToggle(300);
  $(this).toggleClass('humber-menu-expend');
});
	
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};

if($('.tbody-td').length){
  $('.tbody-td, .tfooter-td, .tfooter-td').matchHeight();
};

//$('[data-toggle="tooltip"]').tooltip();


$('.xs-order-now-btn a,.order-con-btn').on('click', function(e){
  e.preventDefault();
  $('body').addClass('xs-order-sec-cntlr');
});

$('.xs-back-btn a').on('click', function(e){
  e.preventDefault();
  $('body').removeClass('xs-order-sec-cntlr');
});

// body animate
if($('.scroll').length){
  $(".scroll").click(function(e) {
      e.preventDefault();
      var goto = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(goto).offset().top - 0
      }, 800);
  });

}

if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });
}

/*
----------------------
 Accordion Js
----------------------
*/

$('.faq-accoordion-wrp').on('click', '.faq-accoordion-cp', function() {
    $('.faq-accoordion').find('.ac-box-title').stop().slideUp();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('span').removeClass('active');
    $(this).closest('.faq-accoordion').find('.ac-box-title').stop().slideToggle();
});


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {



// }


})(jQuery);