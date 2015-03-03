// import Hello = require("./hello");

/// <reference path="./underscore.d.ts" />

import _ = require("underscore");

class Main {

	constructor() {
		console.log("Inside main");
		this.sayHello();
	}

	private sayHello() {
		var myHello = new Hello();
	}

}

// export = Main;

class Hello {

	constructor() {
		console.log("Inside test");
		this.sayHello();
	}

	private sayHello() {
		console.log(_.isFunction([]));
	}

}



// export = Hello;