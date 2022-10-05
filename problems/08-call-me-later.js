class CallCenter {
	constructor(name){
		this.name = name
	}

	 sayHello = () => {
		console.log(`Hello this is ${this.name}`);
		}




	callMeLater(delay){ 
		setTimeout(this.sayHello, delay)
	}
		// - takes in a `delay` in milliseconds that will call
		//  the `sayHello()` method on the instance after the `delay`. The context
		//  of the `sayHello()` method when invoked needs to be the `CallCenter`
		//  instance that the method was called on.



}


// class CallCenter{
// 	constructor(name){
// 			this.name = name;
// 	}

// 	sayHello = () => {
// 	 console.log(`Hello this is ${this.name}`)
// 			/*A return statement dosen't work here and I think I know why*/
// 	}
// 	callMeLater(delay){
// 			setTimeout(this.sayHello, delay);
// }
// }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}