'use strict';

var driver = require('ruff-driver');

module.exports = driver({
    attach: function (inputs) {
        //do init steps here
        //this._gpio = inputs.getRequired('gpio');
    },

    detach: function () {
        //do clean work here
    }
});
