(function($) {
var windowWidth = $(window).width();
$('.humberger-menu-btn').on('click', function(){
	$('.main-nav').slideToggle(300);
});
	
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};

if($('.tbody-td').length){
  $('.tbody-td, .tfooter-td, .tfooter-td').matchHeight();
};

//$('[data-toggle="tooltip"]').tooltip();



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



 new WOW().init();

})(jQuery);