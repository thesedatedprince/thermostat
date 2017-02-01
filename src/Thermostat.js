'use strict';

function Thermostat() {
    this._temperature = 20;
    this._maxtemperature = 25;
    this._powersaving = true
}

Thermostat.prototype.up = function(number) {
    this._temperature += number;
};

Thermostat.prototype.down = function(number) {
    var temp = this._temperature;

    if ((temp -= number) < 10) {
        throw new Error("Minimum temperature is 10");
    }
    else {
    this._temperature -= number;
    }
};

Thermostat.prototype.powerswitch = function(){
  if (this._powersaving === true) {
    this._powersaving = false;
    this._maxtemperature = 32;
  } else {
    this._powersaving = true;
    this._maxtemperature = 25;
  }
}

Thermostat.prototype.reset = function(){
  this._temperature = 20
}

Thermostat.prototype.usage = function(){
  if (this._temperature <= 18){
    return "low-usage"
  } else if ((this._temperature > 18) && (this._temperature <= 25)) {
    return "medium-usage"
  } else if (this._temperature > 25){
    return "high-usage"
  }
}
