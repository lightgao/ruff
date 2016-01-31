'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('button').on('push', function() {
        $('led-r').turnOn();
        console.log('in button key push');
    });

    $('button').on('release', function() {
        $('led-r').turnOff();
        console.log('in button key release');
    });
});

$.end(function () {
    $('led-r').turnOff();
});