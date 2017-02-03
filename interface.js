$( document ).ready(function() {

var thermostat = new Thermostat();

getServer();

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d07e6621e8123dcc8749c05c7cb4e1db&units=metric', function(data) {
  $('#outsideTemperature').text(data.main.temp);
});

$('#selectCity').submit(function(event) {
  event.preventDefault();
  var city = $('#currentCity').val();
  displayWeather(city);
  postServer();
})

$('#currentTemperature').text(thermostat.getcurrenttemp());

$('#usage').text(thermostat.usage());

$('#powerMode').text(thermostat.getPowerMode());

$( "#upform" ).on ("submit", function( event ) {
  console.log("click");
  event.preventDefault();
  var number = $("#upform :input")['0'].valueAsNumber;
  console.log("jquery", number)
  thermostat.up(number);
  updateTemperature();
  postServer();
});

$( "#downform" ).on ("submit", function( event ) {
  event.preventDefault();
  var number = $("#downform :input")['0'].valueAsNumber;
  thermostat.down(number);
  updateTemperature();
  postServer();
});

$('#powerModeButton').click ( function() {
  thermostat.powerswitch();
  $('#powerMode').text(thermostat.getPowerMode());
});

$('#resetButton').click ( function() {
  thermostat.reset();
  updateTemperature();
  postServer();
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

function postServer(){
  $.post("http://localhost:4567/temperature",{temperature: thermostat.getcurrenttemp(), city: $('#currentCity').val()});
};

function getServer(){
  $.get("http://localhost:4567/temperature", function(data){
    thermostat._temperature = data.temperature;
    $('#currentCity').val(data.city);
    displayWeather(data.city);
    updateTemperature();
  })
}
});
