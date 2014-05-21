// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here

  var targetClasses = className.split(" "); // array of all classes user is searching for
  return getElementsHelper(targetClasses, document.body, []);
};

// helper method so that I can pass in more parameters
var getElementsHelper = function(targetClasses, currElement, elements) {
    if (currElement !== null) {
      var classList = currElement.classList;

      // removing text nodes so only element nodes remain
      var children = filter(currElement.childNodes, function(child) {
        return child.nodeType === Node.ELEMENT_NODE;
      });
      
      // I think this chunk of code makes it so this function would also work 
      // for searching for elements with multiple class names
      var matches = 0;
      for (var i = 0; i < targetClasses.length; i++) {
        if (classList.contains(targetClasses[i])) {
          matches++;
        }
      }  
      // if element has all of the target classes
      if (matches === targetClasses.length) {
        elements.push(currElement);
      }

      // recursive call on all of the current node's children
      for (var i = 0; i < children.length; i++) {
        getElementsHelper(targetClasses, children[i], elements);
      }
    }
    return elements;

};

// helper function that filters based on test function
var filter = function(arr, test) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
