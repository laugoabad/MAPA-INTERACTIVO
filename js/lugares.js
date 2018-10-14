lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).
  var infowindow;
  var marcadores = [];


    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
        infowindow = new google.maps.InfoWindow();
        var servicioLugares = new google.maps.places.PlacesService(mapa);
        var radio = document.getElementById('radio').value;
        var tipoDeLugar = document.getElementById('tipoDeLugar').value;
        servicioLugares.nearbySearch({
          location: posicion,
          radius: radio,
          type: tipoDeLugar,
        }, marcadorModulo.marcarLugares);


      // function callback(results, status) {
      //   //borrarTodosLosMarcadores();
      //   if (status === google.maps.places.PlacesServiceStatus.OK) {
      //     for (var i = 0; i < results.length; i++) {
      //     alert('places '+results[i].name);
      //        marcadorModulo.marcarLugares(results[i]);
      //
      //       //createMarker(results[i]);
      //
      //     }
      //   }
      // }

    function borrarTodosLosMarcadores() {
      for (var i = 0; i < marcadores.length; i++) {
        marcadores[i].setMap(null);
      }
    }

      // function createMarker(place) {
      //   var placeLoc = place.geometry.location;
      //   var marker = new google.maps.Marker({
      //     map: mapa,
      //     position: place.geometry.location
      //   });
      //   marcadores.push(marker);
      //   google.maps.event.addListener(marker, 'click', function() {
      //     infowindow.setContent(place.name);
      //     infowindow.open(map, this);
      //   });
      // }




        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

  }
  return {
    inicializar,
    buscarCerca
  }
})()
