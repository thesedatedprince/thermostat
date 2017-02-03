'use strict';

function Thermostat() {
    this.DEFAULT_TEMPERATURE = 20;
    this.PSM_ON_MAX_TEMP = 25;
    this.PSM_OFF_MAX_TEMP = 32;
    this.LOW_USAGE_LIMIT = 18;
    this.MEDIUM_USAGE_LIMIT = 25;

    this._temperature = this.DEFAULT_TEMPERATURE;
    this._maxtemperature = 25;
    this._mintemperature = 10;
    this._powersaving = true;
}

Thermostat.prototype.getcurrenttemp = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(number) {
    if ((this._temperature + number) > this._maxtemperature) {
      console.log('error')
    }
      this._temperature += number;
    };

Thermostat.prototype.down = function(number) {
    var temp = this._temperature;

    if ((temp -= number) < this._mintemperature) {
        throw new Error("Minimum temperature is 10");
    }
    else {
    this._temperature -= number;
    }
};

Thermostat.prototype.powerswitch = function(){
  if (this._powersaving === true) {
    this._powersaving = false;
    this._maxtemperature = this.PSM_OFF_MAX_TEMP;
  } else {
    this._powersaving = true;
    this._maxtemperature = this.PSM_ON_MAX_TEMP;
  }
};

Thermostat.prototype.reset = function(){
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.usage = function(){
  if (this._temperature <= this.LOW_USAGE_LIMIT){
    return "low-usage";
  } else if ((this._temperature > this.LOW_USAGE_LIMIT) && (this._temperature <= this.MEDIUM_USAGE_LIMIT)) {
    return "medium-usage";
  } else if (this._temperature > this.MEDIUM_USAGE_LIMIT){
    return "high-usage";
  }
};

Thermostat.prototype.getPowerMode = function() {
 if(this._powersaving === true) {
     return "Power saving is on";
 }
 else {
     return "Power saving is off";
 }
};


