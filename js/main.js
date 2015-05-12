
$(document).ready(function(){

    // mixitup
    $('.port-menu-img-area').mixItUp({
        animation: {
            duration: 550,
            effects: 'fade scale(1.84) stagger(104ms)',
            easing: 'ease'
        }
    });

    // portfolio hover
    $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );

        // Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
});


function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);