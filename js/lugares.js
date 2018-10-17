lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).
  var infowindow;
    // Completa las direcciones ingresadas por el usuario a y establece los límites
  //   // con un círculo cuyo radio es de 20000 metros.

    function Autocompletar(mapa) {
            this.mapa = mapa;
            this.direccion = null;
            this.origen = null;
            this.destino = null;
            this.modo = 'CAMINANDO';
            //this.intermedioAAgregar = null;
            var direccion = document.getElementById('direccion'); alert('direccion '+direccion);
            var desde = document.getElementById('desde');
            var hasta = document.getElementById('hasta');
            var selectorMedioDeTransprte = document.getElementById('comoIr');
            var lugaresIntermedios = document.getElementById('puntosIntermedios');
            // this.directionsService = new google.maps.DirectionsService;
            // this.directionsDisplay = new google.maps.DirectionsRenderer;
            // this.directionsDisplay.setMap(mapa);

            var autocompletarDireccion = new google.maps.places.Autocomplete(
                direccion, {placeIdOnly: true});
                alert('direccion de Autocompletar '+autocompletarDireccion.value);
            var autocompletarOrigen = new google.maps.places.Autocomplete(
                desde, {placeIdOnly: true});
            var autocompletarDestino = new google.maps.places.Autocomplete(
                hasta, {placeIdOnly: true});
            var autocompletarIntermedio = new google.maps.places.Autocomplete(
                agregar, {placeIdOnly: true}) ;



            // this.setupClickListener('auto', 'AUTO');
            // this.setupClickListener('caminando', 'CAMINANDO');
            // this.setupClickListener('transporte-publico', 'TRANSPORTE PUBLICO');

            // this.setupCambioDireccionListener(autocompletarDireccion, 'DIRECCION');
            // this.setupCambioDireccionListener(autocompletarOrigen, 'ORIG');
            // this.setupCambioDireccionListener(autocompletarDestino, 'DEST');
            // this.setupCambioDireccionListener(autocompletarIntermedio, 'INTERM');
            // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(desde);
            // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(hasta);
            // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(selectorMedioDeTransprte);
          }

          // Autocompletar.prototype.setupClickListener = function(id, modo) {
          //   var radioButton = document.getElementById(id);
          //   var that = this;
          //   radioButton.addEventListener('click', function() {
          //     that.modo = modo;
          //     that.route();
          //   });
          // };

          // Autocompletar.prototype.setupCambioDireccionListener = function(autocompletar, modo) {
          //   var that = this;
          //   autocompletar.bindTo('bounds', this.mapa);
          //   autocompletar.addListener('place_changed', function() {
          //     var lugar = autocompletar.getPlace();
          //     if (!lugar.place_id) {
          //       window.alert("Please select an option from the dropdown list.");
          //       return;
          //     }
          //     if (modo === 'ORIG') {
          //       that.origen = lugar.place_id;
          //     } else {
          //       that.destino = lugar.place_id;
          //     }
          //     that.route();
          //   });
          //
          // };
          //
          //
          //
          // Autocompletar.prototype.route = function() {
          //    if (!this.origen || !this.destino) {
          //      return;
          //    }
          //    var that = this;
          //    this.directionsService.route({
          //      origin: {'placeId': this.origen},
          //      destination: {'placeId': this.destino},
          //      travelMode: this.modo
          //    }, function(response, status) {
          //      if (status === 'OK') {
          //       that.directionsDisplay.setDirections(response);
          //      } else {
          //        window.alert('Directions request failed due to ' + status);
          //      }
          //    });
          //  };





        /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */


    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa);
    var autocompletar = new Autocompletar(mapa);
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


        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

  }
  return {
    inicializar,
    buscarCerca,

  }
})()
