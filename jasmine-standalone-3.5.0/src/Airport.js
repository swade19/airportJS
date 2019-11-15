'use strict'; 

function Airport() { 
    this._hangar = [];
    this.planeLanded = true; 
    var test = "Hello There";
}


Airport.prototype.planes = function() {return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
    this._hangar.push(plane);

 };

 Airport.prototype.clearForTakeOff = function(plane) { 
        this._hangar.pop(plane);
        this.planeLanded = false 
        //this.hangar = [];  was other solution 
 }

 Airport.prototype.planeStatus = function() { 
     if (this.planeLanded == true) { 
         return 'Landed'}
     else { 
         return 'Departed'}
     };
    

 