(function(ventana) {
  var adios ={};
  var hablapalabra = "Good Bye";
  adios.speak = function(name) {
    console.log(hablapalabra + " " + name);
  }
  ventana.adios = adios;
})(ventana);
