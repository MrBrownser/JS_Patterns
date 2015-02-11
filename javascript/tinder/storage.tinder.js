var Tinder = window.Tinder || {};

var SingletonStorer = (function(){
	function Singleton(args) {
		var args = args || {};
		this.name
	}
})


if(!window.localStorage) throw new Error("Local Storage API not available.");

Tinder.save = function(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
};

Tinder.get = function(key) {
  return JSON.parse(window.localStorage.getItem(key));
};

Tinder.remove = function(key) {
  window.localStorage.removeItem(key);
};

// var SingletonTester = (function(){
//     function Singleton(args) {
//         var args = args || {};
//         //set the name parameter
//         this.name = 'SingletonTester';
//         this.pointX = args.pointX || 6;
//     }

//     var instance;  //this is our instance holder
//     //this is an emulation of static variables and methods
//     var _static = {
//         name: 'SingletonTester',
//         getInstance: function (args) {
//             if (instance === undefined) {
//                 instance = new Singleton(args);
//             }
//             return instance;
//         }
//     };

//     return _static;
// })();

// var singletonTest = SingletonTester.getInstance({pointX: 5});
// console.log(singletonTest.pointX); // outputs 5