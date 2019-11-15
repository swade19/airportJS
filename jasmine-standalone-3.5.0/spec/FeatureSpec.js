'use strict'; 

describe('Feature Test:', function() { 
    var plane;
    var airport;

    beforeEach(function(){
        plane = new Plane()
        airport = new Airport(); 
    });

    it('planes can be told to land at the airport', function(){ 
        plane.land(airport);
        expect(airport.hanger()).toContain(plane);
    });

});