import Hello = require("./hello");

/// <reference path="./underscore.d.ts" />

class Main {

	constructor() {
		console.log("Inside main");
		this.sayHello();
	}

	private sayHello() {
		var myHello = new Hello();
	}

}

export = Main;

