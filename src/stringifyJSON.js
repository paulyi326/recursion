// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
 
  // your code goes here
 
  var type = typeof obj;
  // if obj is just a primitive
  if (type !== "function" && type !== "undefined") {
    if (type !== "object" || obj === null) {
      if (type == "string") {
        obj = '"' + obj + '"';
      }
      return String(obj);
    } else if (type === "object") {
      var objIsArray = Array.isArray(obj);
      var result = [];
      for (var key in obj) {
        var value = obj[key];
        if (typeof value !== "function" && typeof value !== "undefined") {
          var valueType = typeof value;
          if (valueType === "string") {
            value = '"' + value + '"';
          } else if (valueType === "object") { 
            value = stringifyJSON(value);
          }
          if (!objIsArray) {
            result.push(('"' + key + '":' + String(value)));
          } else {
            result.push(String(value));
          }
        }
      }   
      if (objIsArray) {
        return "[" + String(result) + "]";  
      } else {
        return "{" + String(result) + "}";
      }
         
    }
  } else {
    return undefined;
  }
};
