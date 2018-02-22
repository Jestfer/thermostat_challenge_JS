'use strict';

function Thermostat() {
  this.defaultTemp = 20;
  this.currentTemp = 25;
  this.powerSave = true;
};

Thermostat.prototype.upTemp = function(degrees) {
  this.currentTemp += degrees;

  if (this.powerSave === true && this.currentTemp > 25) {
    this.currentTemp -= degrees;
    throw 'Power Save mode on, max temp is 25';
  } else if (this.powerSave === false && this.currentTemp > 32) {
    this.currentTemp -= degrees;
    throw 'Max temp is 32';
  }
};

Thermostat.prototype.downTemp = function(degrees) {
  this.currentTemp -= degrees;

  if (this.currentTemp < 10) {
    throw new Error('temperature can not be below 10 degrees!');
  }
};

Thermostat.prototype.reset = function() {
  this.currentTemp = 20;
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
