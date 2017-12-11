"use strict";
var Room = function() {
  function Room ( name ) {
    Insp._classCallCheck(this, Room);

    this._name = name;
    this._listDevice = [];

    Power.call( this );
    Insp.aggregation( Room, Power);

    //Ilumination.call(this, 0, 10);
    //Insp.aggregation(Room, Ilumination);
  }

  Room.prototype.addDevice = function( device ) {
    this._listDevice.push(device);
  };

  return Room;
}();

var room = new Room("кладовка");
console.dir(room);

