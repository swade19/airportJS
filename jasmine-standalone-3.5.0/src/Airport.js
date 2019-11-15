'use strict'; 

function Airport() { 
    this.hangar = [];
    this.planeLanded = true 
}


Airport.prototype.planes = function() {return this.hangar; };

Airport.prototype.clearForLanding = function(plane) {
    this.hangar.push(plane);

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
     }

 }