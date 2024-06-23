(
  function(){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for ( var i = 0; i < names.length; i++) {

      var fL =names[i].charAt(0);
      
      if (fL.toLocaleLowerCase() == "j") {
        bS.speak(names[i]);
      } else {
        hS.speak(names[i]);
      }
    }

  }
)();
