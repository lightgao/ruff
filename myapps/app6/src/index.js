'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('sw-1801p').on('shock', function() {
        console.log('shocking');

        $('led-b').turnOn();
        setTimeout(function(){
            $('led-b').turnOff();
        }, 500);
    });

    $('led-r').turnOn();
});

$.end(function () {
    $('led-r').turnOff();
});
