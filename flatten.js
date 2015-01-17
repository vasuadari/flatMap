Array.prototype.flatten = function() {
  var inputArray = this;
  var start = function(value, index, length) {
    flatEach(value.shift());
    ++index != length && start(value, index, length);
    return value;
  }

  var flatEach = function(eachValue) {
    return Array.isArray(eachValue) ? start(eachValue, 0, eachValue.length) : inputArray.push(eachValue);
  }

  return start(inputArray, 0, inputArray.length);
}
