"use strict";
var Room = function() {
  function Room ( name ) {
    Insp._classCallCheck(this, Room);

    this._name = name;
    this._listDevice = [];

    Power.call( this );
    Insp.aggregation( Room, Power);

  }

  Room.prototype.addDevice = function( device ) {
    this._listDevice.push(device);
  };

  return Room;
}();

var room = new Room("кладовка");
console.dir(room);

