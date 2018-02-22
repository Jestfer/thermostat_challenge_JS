'use strict';

function Thermostat() {
  this.defaultTemp = 20;
  this.currentTemp = 20;
  this.powerSave = true;
};

Thermostat.prototype.upTemp = function(degrees) {
  // this.currentTemp += degrees;
  // We store the currentTemp modified in a new var and check if OK
  var newTemp = this.currentTemp + degrees;

  if (this.powerSave === true && newTemp > 25) {
    throw 'Power Save mode on, max temp is 25';
  } else if (this.powerSave === false && newTemp > 32) {
    throw 'Max temp is 32';
  }

  this.currentTemp = newTemp;
};

Thermostat.prototype.downTemp = function(degrees) {
  var newTemp = this.currentTemp - degrees;

  if (newTemp < 10) {
    throw new Error('temperature can not be below 10 degrees!');
  }

  this.currentTemp = newTemp;
};

Thermostat.prototype.reset = function() {
  this.currentTemp = this.defaultTemp;
};

Thermostat.prototype.energyUsage = function() {
  if (this.currentTemp < 18) {
    return 'low-usage';
  } else if (this.currentTemp < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
