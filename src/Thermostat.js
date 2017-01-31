'use strict'

function Thermostat(){
  this._defaulttemp = 20
};

Thermostat.prototype.increaseTemp = function() {
  return this._defaulttemp += 1;
}

Thermostat.prototype.decreaseTemp = function(){
  return this._defaulttemp -= 1;
}
