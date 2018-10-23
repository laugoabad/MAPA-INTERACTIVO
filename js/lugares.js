lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).
  var infowindow;
    // Completa las direcciones ingresadas por el usuario a y establece los límites
  //   // con un círculo cuyo radio es de 20000 metros.
    function autocompletar() {

            var selectorMedioDeTransprte = document.getElementById('comoIr');
            var lugaresIntermedios = document.getElementById('puntosIntermedios');
            // this.directionsService = new google.maps.DirectionsService;
            // this.directionsDisplay = new google.maps.DirectionsRenderer;
            // this.directionsDisplay.setMap(mapa);

            var circulo = new google.maps.Circle ({
              center: posicionCentral,
              radius: 20000
            });

            var direccionAutocompletada = new google.maps.places.Autocomplete(
                document.getElementById('direccion'));
            var origenAutocompletado = new google.maps.places.Autocomplete(
                document.getElementById('desde'));
            var destinoAutocompletado = new google.maps.places.Autocomplete(
                document.getElementById('hasta'));
            var intermedio = new google.maps.places.Autocomplete(
                agregar) ;

           direccionAutocompletada.setBounds(circulo.getBounds());
           origenAutocompletado.setBounds(circulo.getBounds());
           destinoAutocompletado.setBounds(circulo.getBounds());
          }



        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */


    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    autocompletar();
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
    //alert('posicion dentro de buscar cerca '+posicion.geometry.location);
        infowindow = new google.maps.InfoWindow();
        var servicioLugares = new google.maps.places.PlacesService(mapa);
        var radio = document.getElementById('radio').value;
        var tipoDeLugar = document.getElementById('tipoDeLugar').value;
        servicioLugares.nearbySearch({
          location: posicion,
          radius: radio,
          type: tipoDeLugar,
        }, marcadorModulo.marcarLugares);


        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

  }
  return {
    inicializar,
    buscarCerca,

  }
})()
