"use strict";
function Illumination( power, load) {
  this.power = power;
  this.deviceLoad = load;
}

Illumination.prototype.powerOn = function() {
  this.power.powerOn();
};

Illumination.prototype.powerOff = function () {
  this.powerOff();
};

Illumination.prototype.getPowerStatus = function () {
  this.power.getPowerStatus();
};

Illumination.prototype.setLoad = function ( newLoad ) {
  this.deviceLoad.setDeviceLoad( newLoad );
};

Illumination.prototype.loadIncrease = function () {
  this.deviceLoad.loadDeviceIncrease();
};

Illumination.prototype.loadDecrease = function () {
  this.deviceLoad.loadDeviceDecrease();
};

