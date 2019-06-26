$(document).ready(function () {

$('.btn-menu').click(function(){
  $('.b-menu').toggleClass('active');
  $('.btn-menu').toggleClass('active');
  if ($('.btn-menu').hasClass('active')) {
    $('.btn-menu').text('Закрыть');
  } else{
    $('.btn-menu').text('Меню');
  }  
});


        $('.b-map-button').click(function(){
          $('.b-map').toggleClass('active');
          $(this).toggleClass('active');

          });


$('.b-menu-xs strong').click(function(){
  $(this).next().slideToggle('active');
  $(this).toggleClass('active');
});

$(".b-input-tel").inputmask("+7(999)999-99-99");

 
/*
$('.b-block-left__wrap input[type=checkbox]').click(function() {
    if($(this).not(':checked')) {
      $('.b-block-left__bottom').addClass('active');
    }
    else {
      $('.b-block-left__bottom').removeClass('active');
    }
});
*/

$(document).ready(function() {
        $(".b-block-left__wrap input[type=checkbox]").click(function() {
            var checked = $(this).is(':checked');
            if (checked) {
                $('.b-block-left__bottom').addClass('active');
            } else {
                $('.b-block-left__bottom').removeClass('active');
            }
        });
    });

// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(53.921740, 27.579010), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
        position: new google.maps.LatLng(53.921740, 27.579010),
        map: map,
        title: 'Snazzy!',
/*                icon: {
                    url: "images/marker.svg",
                    scaledSize: new google.maps.Size(42, 60),
                    labelOrigin: new google.maps.Point(145, 25, 5),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(36, 49)           
                } */     

    });

}



$('.b-store-item__left').click(function(){
  $(this).next().slideToggle('active');
  $(this).toggleClass('active');
});



$(".b-aside-bottom").on("click","button", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
 
 

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 100){
        $('.b-header').addClass('active');
     } else if(scrolledpx < 101){
      $('.b-header').removeClass('active');
     }

  });





$('.b-main-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  fade: false,
  variableWidth: true,
  arrows: false,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      variableWidth: false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
       variableWidth: false,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.b-team-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  arrows: true
});



function blogtabs(idblogtabs) {
var tabs = $(idblogtabs);
$('.blogtabs4 > .blogtabs5', tabs).each(function(i) {if ( i != 0 ) $(this).hide(0); }); 
tabs.on('click', '.blogtabs1 a', function(e){
e.preventDefault();                     
var tabId = $(this).attr('href');       
$('.blogtabs1 a',tabs).removeClass();          
$(this).addClass('blogtabs3active');    
$('.blogtabs4 > .blogtabs5', tabs).hide(0);
$(tabId).fadeIn(500);
}); }

$(document).ready(function(){
blogtabs('.mytabs1');  
blogtabs('.mytabs2');   
});






});
