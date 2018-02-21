'use strict';

function Thermostat() {
  this.default_temp = 20;
  this.current_temp = 20;
};

Thermostat.prototype.up_temp = function(degrees) {
  this.current_temp += degrees;
};

Thermostat.prototype.down_temp = function(degrees) {
  this.current_temp -= degrees;
  
  if(this.current_temp < 10) {
    throw new Error('temperature can not be below 10 degrees!');
  }
};
