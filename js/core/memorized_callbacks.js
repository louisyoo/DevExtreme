"use strict";

var $ = require("../core/renderer");

var MemorizedCallbacks = function() {

    var memory = [];
    var callbacks = $.Callbacks();

    this.add = function(fn) {
        $.each(memory, function(_, item) {
            fn.apply(fn, item);
        });
        callbacks.add(fn);
    };

    this.remove = function(fn) {
        callbacks.remove(fn);
    };

    this.fire = function() {
        memory.push(arguments);
        callbacks.fire.apply(callbacks, arguments);
    };

};

module.exports = MemorizedCallbacks;
