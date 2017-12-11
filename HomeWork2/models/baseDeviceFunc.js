"use strict";
//Питание
function Power (){
  this._powerStatus = false;
}

Power.prototype.powerOn = function() {
  this._powerStatus = true;
};

Power.prototype.powerOff = function() {
  this._powerStatus = false;
};

Power.prototype.getPowerStatus = function() {
  return this._powerStatus;
};


// Нагрузка на устройство
function DeviceLoad ( minLoad, maxLoad ) {
  this._minLoad = Insp.checkNum( minLoad );
  this._maxLoad = Insp.checkPositiveNum( maxLoad );
  this._curDeviceLoad = 0;
}

DeviceLoad.prototype.setDeviceLoad = function( curLoad ) {
  if ( ( Insp.checkNum(curLoad) )
    && ( curLoad <= this._maxLoad )
    && ( curLoad >= this._minLoad ) ){
      this._curDeviceLoad = curLoad;
  }
};  

DeviceLoad.prototype.loadDeviceIncrease = function() {
  if ( this._curDeviceLoad < this._maxLoad ) {
    ++this._curDeviceLoad;
  }
};

DeviceLoad.prototype.loadDeviceDecrease = function() {
  if ( this._curDeviceLoad > this._minLoad ) {
    --this._curDeviceLoad;
  }
};


// Список программ в устройстве
function Programs ( arr ) {
  this._currentProgramIndex = 0;
  this._Programs = arr;
}

Programs.prototype.programNext = function() {
  if ( this._currentProgramIndex < this._Programs.length-1 ) {
    this._currentProgramIndex++;
  }
};

Programs.prototype.programPrev = function() {
  if ( this._currentProgramIndex > 0 ) {
    this._currentProgramIndex--;  
  }
};

Programs.prototype.getProgramIndex = function() {
  return this._currentProgramIndex
};

Programs.prototype.setProgramIndex = function(progIndex) {
  if ( ( 0 < progIndex ) && ( progIndex < this._Programs.length-1 ) ) {
    this._currentProgramIndex = progIndex;
  }
};

//Громкость
function Volume( maxVol ) {
  this._maxVol = Insp.checkPositiveNum( maxVol );
  this._curVol = 1;
}

Volume.prototype.volumeUp = function () {
  if ( this._curVol < this._maxVol ) {
    this._curVol++;
  }
}

Volume.prototype.volumeDown = function () {
  if ( this._curVol > 0 ) {
    this._curVol--;
  }
}

Volume.prototype.volumeMute = function () {
  this._curVol = 0;
}