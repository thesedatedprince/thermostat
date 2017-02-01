$( document ).ready(function() {

var thermostat = new Thermostat();

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d07e6621e8123dcc8749c05c7cb4e1db&units=metric', function(data) {
  $('#outsideTemperature').text(data.main.temp);
});

$('#selectCity').submit(function(event) {
  event.preventDefault();
  var city = $('#currentCity').val();
  displayWeather(city);
})

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

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&APPID=d07e6621e8123dcc8749c05c7cb4e1db';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#outsideTemperature').text(data.main.temp);
 })
}
});
