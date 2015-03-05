/// <reference path="./underscore.d.ts" />

import _ = require("underscore");

class Hello {

	constructor() {
		console.log("Inside test");
		this.sayHello();
	}

	private sayHello() {
		console.log(_.isFunction([]));
	}

}





export = Hello;