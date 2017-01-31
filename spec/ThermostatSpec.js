var thermostat;

beforeEach(function(){
  thermostat = new Thermostat();
})

describe('thermostat temperature', function(){
  it('should be set at 20 degrees', function(){
    expect(thermostat._defaulttemp).toEqual(20)
  })
})
