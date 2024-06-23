(function(window){
    var hS = {};
    var sW = "Hello";
    hS.speak = function (name) {
      console.log(sW + " " + name);
    }
    window.hS = hS;
  }
)(window);
