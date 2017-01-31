'use strict'

var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
})

describe('thermostat temperature', function(){
  it('should be set at 20 degrees', function(){
    expect(thermostat._defaulttemp).toEqual(20)
  })
})

describe('increase thermostat temperature', function(){
  it('should increase temp', function(){
    thermostat.increaseTemp();
    expect(thermostat._defaulttemp).toEqual(21)
    })
  })

  describe('decrease thermostat temperature', function(){
    it('should decrease temp', function(){
      thermostat.decreaseTemp();
      expect(thermostat._defaulttemp).toEqual(19)
      })
    })
