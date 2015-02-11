var MyQuery = function() {
  this.element;
  this.query = function() {
    // do something
    return this;
  }
  this.on = function() {
    // do something
    return this;
  }
}

$.query("").on("click", callback);

var button = $.query();
button.on();