'use strict';

describe("Thermostat", function() {
    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it("starts at 20 degrees", function() {
        expect(thermostat._temperature).toEqual(20);
    });

    it("can increase the temperature", function() {
        thermostat.up(5);
        expect(thermostat._temperature).toEqual(25);
    });

    it("can decrease the temperature", function() {
        thermostat.down(5);
        expect(thermostat._temperature).toEqual(15);
    });

    it("temperature can't go below 10 degrees", function() {
        thermostat.down(10);
        expect(function() { thermostat.down(1); }).toThrowError("Minimum temperature is 10");
    });

    it("max temperature is twenty-five degrees if power saving on", function(){
      thermostat._powersaving = true
      expect(thermostat._maxtemperature).toEqual(25);
    })

    it("max temperature is thirty-two degrees if power saving is off", function(){
      thermostat.powerswitch()
      expect(thermostat._maxtemperature).toEqual(32);
    })

    it("can reset the temperature to 20 with a reset function", function(){
      thermostat.up(5);
      thermostat.reset();
      expect(thermostat._temperature).toEqual(20);
    })
    it("can indicate low usage", function(){
      thermostat.down(3);
      expect(thermostat.usage()).toEqual("low-usage");
    })
    it("can indicate medium usage", function(){
      expect(thermostat.usage()).toEqual("medium-usage");
    })
    it("can indicate high usage", function(){
      thermostat.powerswitch();
      thermostat.up(10);
      expect(thermostat.usage()).toEqual("high-usage")
    })
});
