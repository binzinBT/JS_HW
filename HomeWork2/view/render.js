"use strict";

!function RenderIll() {
  var powerIll = new Power();
  var loadIll = new DeviceLoad(0 , 10);
  var il = new Illumination( powerIll, loadIll );

  il.loadIncrease();
  il.setLoad(3);
  il.powerOn();
  il.loadDecrease();
  console.dir(il);
}();

!function RenderIllOld() {
  var ilOld = new IlluminationOld( 0, 10 );

  ilOld.loadDeviceIncrease();
  ilOld.setDeviceLoad(9);

  console.dir(ilOld);
}();

!function RenderIllOldNew () {
  var illpower = new Power();
  var illLoad = new DeviceLoad( 0, 8 );
  var illOldNew = new IlluminationOldNew( "кухня", illpower, illLoad );

  illOldNew.load.loadDeviceIncrease();
  illOldNew.load.setDeviceLoad(3);

  console.dir(illOldNew);
}();
