'use strict';

function Thermostat() {
    this._temperature = 20;
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