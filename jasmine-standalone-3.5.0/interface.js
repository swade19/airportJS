$(document).ready(function() { 
    var airport = new Airport();
    var plane = new Plane(); 

updateAirport(); 

$('#plane-land').on('click', function() { 
    plane.land(airport);
    updateAirport();
    $('landed-plane').text('land')
});

function updateAirport() { 
    //$('#airport').text(airport.planeStatus);
    $('#airport').text(airport.test);
};
});