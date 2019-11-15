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
        expect(airport.planes()).toContain(plane);
    });

    it('planes can be told to takeoff', function() { 
        plane.land(airport)
        plane.takeoff(); 
        expect(airport.planes()).not.toContain(plane);
    });

    // it('doesnt let planes takeoff when it is stormy', function() { 
    //     plane.land(airport)
    //     SpeechSynthesisVoice(airport, 'isStormy').and.returnValue(true); 
    //     expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm'); 
    //     expect(airport.planes()).toContain(plane)
    // }

});