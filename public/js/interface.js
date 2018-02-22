$(document).ready(function() {

  var thermo = new Thermostat();

  var currentTemp = $('#current-temperature').text(thermo.currentTemp);
  // console.log(thermo.currentTemp);

  $('#temperature-up').click();
});