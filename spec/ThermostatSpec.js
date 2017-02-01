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
});
