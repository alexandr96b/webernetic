$(document).ready(function () {

$('.btn-menu').click(function(){
  $('.b-menu').toggleClass('active');
  $('.btn-menu').toggleClass('active');
});


$('.b-menu-xs strong').click(function(){
  $(this).next().slideToggle('active');
  $(this).toggleClass('active');
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




 
 




});



