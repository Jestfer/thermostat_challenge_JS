'use strict';

function Thermostat() {
  this.defaultTemp = 20;
  this.currentTemp = 20;
  this.powerSave = false;
};

Thermostat.prototype.upTemp = function(degrees) {
  this.currentTemp += degrees;
  if (this.powerSave === true && this.currentTemp > 25) {
    // this.currentTemp -= degrees;
    this.currentTemp -= degrees;
    throw 'Power Save mode on, max temp is 25';
   }
};

Thermostat.prototype.downTemp = function(degrees) {
  this.currentTemp -= degrees;

  if(this.currentTemp < 10) {
    throw new Error('temperature can not be below 10 degrees!');
  }
};
