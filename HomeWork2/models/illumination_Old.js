"use strict";
//var IlluminationOld = function () {
  function IlluminationOld( minPL, maxPL) {
    Insp._classCallCheck( this, IlluminationOld);

    Power.call(this);
    Insp.aggregation(IlluminationOld, Power);

    DeviceLoad.call(this, minPL, maxPL);
    Insp.aggregation(IlluminationOld, DeviceLoad);
  }

  /*return IlluminationOld;
}();
*/


