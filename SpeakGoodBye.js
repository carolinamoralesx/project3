(function(window) {
  var bS ={};
  var sW = "Good Bye";
  bS.speak = function(name) {
    console.log(sW + " " + name);
  }
  window.bS = bS;
})(window);
