$(document).ready(function () {

$('.btn-menu').click(function(){
  $('.b-menu').toggleClass('active');
  $('.btn-menu').toggleClass('active');
});


$('.b-menu-xs strong').click(function(){
  $(this).next().slideToggle('active');
  $(this).toggleClass('active');
});







$('.b-slider-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  appendDots:  '.b-slider-dots',
  dots: true
});

$('.b-video-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  variableWidth: false,
  dots: false
});

$('.b-reviews-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  variableWidth: false,
  dots: false
});

 

$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 230){
        $('.b-header-top').addClass('active');
     } else if(scrolledpx < 231){
      $('.b-header-top').removeClass('active');
     }

  });





$('.menu-icon').click(function(){
  $('.b-nav').toggleClass('active');
  $('.menu-icon').toggleClass('active');
});


$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-nav > div").length) {
    $('.b-nav').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});

 
 


$(".b-main-left__bottom a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});

$(".b-menu-left a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});
/*var $page = $('html, body');
$('.btn-more[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


*/


 
 




});



