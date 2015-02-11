var TinderClass = function(){};
var Tinder = window.Tinder || new TinderClass();

TinderClass.prototype.element;

TinderClass.prototype.query = function(selector) {
	this.element = document.querySelector(selector);
	return this;
};

TinderClass.prototype.on = function(event, callback) {
	this.element.addEventListener(event, callback);
	return this;
};

// Query Selector Function
// Tinder.query = function(selector) {
//   return document.querySelector(selector);
// };

// Event Listener Function
// Tinder.on = function(element, event, callback) {
//   element.addEventListener(event, callback);
// };

// var MyQuery = function() {
//   this.element;
//   this.query = function() {
//     // do something
//     return this;
//   }
//   this.on = function() {
//     // do something
//     return this;
//   }
// }

// $.query("").on("click", callback);

// var button = $.query();
// button.on();