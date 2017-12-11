"use strict";
var Ilumination = function () {
  function Ilumination( minPL, maxPL) {
    Insp._classCallCheck( this, Ilumination);

    Power.call(this);
    Insp.aggregation(Ilumination, Power);

    DeviceLoad.call(this, minPL, maxPL);
    Insp.aggregation(Ilumination, DeviceLoad);
  }

  return Ilumination;
}();



var il = new Ilumination( 0, 10 );

console.log(il._currentPowLoad);
il.loadDeviceIncrease();
il.setDeviceLoad(9);
console.dir(il);
