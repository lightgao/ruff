'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var adc = $('myadc');
    setTimeout(function(){
        console.log("raw|v|i = " + adc.read() + "," + adc.readVoltage() + "," + adc.readCurrent());
    }, 200);

    $('led-r').turnOn();
});

$.end(function () {
    $('led-r').turnOff();
});
