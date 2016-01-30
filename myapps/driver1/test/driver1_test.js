var assert = require('assert');
var path = require('path');
var test = require('test');

var driverRunner = require('ruff-driver-runner');

var when = require('ruff-mock').when;

var driverPath = path.join(__dirname, '..');

module.exports = {
    'test should build driver': function () {
        driverRunner.run(driverPath, function(device, context) {
            var gpio = context.arg('mygpio');
            when(gpio).read().thenReturn(1);

            assert.equal(1, device.readValue());
        });
    }
};

test.run(module.exports);
