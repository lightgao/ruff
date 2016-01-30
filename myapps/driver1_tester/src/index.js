'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    setInterval(function(){
        if ($('mygpio').readValue() == 0) {
            console.log('pressed')
            $('led-r').turnOn();
        } else {
            console.log('released')
            $('led-r').turnOff();
        }
    }, 300);
});

$.end(function () {
    $('led-r').turnOff();
});
