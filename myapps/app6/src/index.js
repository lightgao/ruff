'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('sw-1801p').on('shock', function() {
        console.log('shocking');
        lightingLed($('led-b'));
    });

    $('sound-01').on('receive', function() {
        console.log('in sound receive');
        lightingLed($('led-r'));
    });

    $('flame-gpio').on('fire', function() {
        console.log('in flame fire');
    });
    $('flame-gpio').on('none', function() {
        console.log('in flame none');
    });
});

$.end(function () {
});

var timer;
function lightingLed(led) {
    led.turnOn();
    if(timer) { clearTimeout(timer); }
    timer = setTimeout(function(){ led.turnOff(); }, 1000);
}