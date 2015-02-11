var Tinder = window.Tinder || {};

Tinder.prototype.query = function(selector) {
	Tinder.query_response = document.querySelector(selector);
	return this;
};

Tinder.prototype.on = function(element, event, callback) {
	//Tinder.query_response.addEventListener(event, callback);
	element.addEventListener(event, callback);
	return this;
}

// Query Selector Function
// Tinder.query = function(selector) {
//   return document.querySelector(selector);
// };

// Event Listener Function
// Tinder.on = function(element, event, callback) {
//   element.addEventListener(event, callback);
// };