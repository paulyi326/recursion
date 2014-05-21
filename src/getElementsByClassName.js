// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var targetClasses = className.split(" ");
  return getElementsHelper(targetClasses, document.body, [], 1);
};

var getElementsHelper = function(targetClasses, currElement, elements, count) {
  var classList = currElement.classList;
  var children = currElement.childNodes;
  var matches = 0;
  for (var i = 0; i < targetClasses.length; i++) {
    if (classList.contains(targetClasses[i])) {
      console.log(classList + count);
      count++;
      matches++;
    }
  }  
  if (matches === targetClasses.length) {
    elements.push(currElement);
  }

  for (var i = 0; i < children.length; i++) {
    getElementsHelper(targetClasses, children[i], elements);
  }
  return elements;

};