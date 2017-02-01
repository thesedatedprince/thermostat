$( document ).ready(function() {

var thermostat = new Thermostat();

$('#currentTemperature').text(thermostat.getcurrenttemp());

$('#usage').text(thermostat.usage());

$('#powerMode').text(thermostat.getPowerMode());

$( "#upform" ).on ("submit", function( event ) {
  event.preventDefault();
  var number = $("#upform :input")['0'].valueAsNumber;
  thermostat.up(number);
  updateTemperature();
});

$( "#downform" ).on ("submit", function( event ) {
  event.preventDefault();
  var number = $("#downform :input")['0'].valueAsNumber;
  thermostat.down(number);
  updateTemperature();
});

$('#powerModeButton').click ( function() {
  thermostat.powerswitch();
  $('#powerMode').text(thermostat.getPowerMode());
});

$('#resetButton').click ( function() {
  thermostat.reset();
  updateTemperature();
});

function updateTemperature(){
  $('#currentTemperature').text(thermostat.getcurrenttemp());
  $('#currentTemperature').attr('class', thermostat.usage());
  $('#usage').text(thermostat.usage());
}

});
