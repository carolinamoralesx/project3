(function(ventana){
    var hola = {};
    var hablapalabra = "Hello";
    hola.speak = function (name) {
      console.log(hablapalabra + " " + name);
    }
    ventana.hola = hola;
  }
)(ventana);
