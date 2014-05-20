// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
 
  // your code goes here
 
  var type = typeof obj;
  // if obj is just a primitive
  if (type !== "object" || obj === null) {
    if (type == "string") {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else if (type === "object") {

  }
};
