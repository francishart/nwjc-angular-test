/// <reference path="./underscore.d.ts" />
var _ = require("underscore");
var Hello = (function () {
    function Hello() {
        console.log("Inside test");
        this.sayHello();
    }
    Hello.prototype.sayHello = function () {
        console.log(_.isFunction([]));
    };
    return Hello;
})();
module.exports = Hello;
