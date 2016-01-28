'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('button').on('push', function() {
        $('led-r').turnOn();
    });

    $('button').on('release', function() {
        $('led-r').turnOff();
    });
});

$.end(function () {
    $('led-r').turnOff();
});