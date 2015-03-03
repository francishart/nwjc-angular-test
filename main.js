// import Hello = require("./hello");
/// <reference path="./underscore.d.ts" />
var _ = require("underscore");
// var angular = require("angular");

var Main = (function () {
    function Main() {
        console.log("Inside main");
        this.sayHello();
    }
    Main.prototype.sayHello = function () {
        var myHello = new Hello();
    };
    return Main;
})();
// export = Main;
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
