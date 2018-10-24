direccionesModulo = (function () {
  var servicioDirecciones // Servicio que calcula las direcciones
  var mostradorDirecciones // Servicio muestra las direcciones
  var waypts = [];
  var lugaresIntermedios = document.getElementById('puntosIntermedios');
    // Calcula las rutas cuando se cambian los lugares de desde, hasta o algun punto intermedio
  function calcularRutasConClic () {
    document.getElementById('comoIr').addEventListener('change', function () {
      direccionesModulo.calcularYMostrarRutas()
    })

    document.getElementById('calcularMuchos').addEventListener('click', function () {
      direccionesModulo.calcularYMostrarRutas()
    })

    lugaresIntermedios.addEventListener("click", function() {
    for (var i = 0; i < lugaresIntermedios.length; i++) {
      if (lugaresIntermedios.options[i].selected) {
        waypts.push({
          location: lugaresIntermedios[i].value,
          stopover: true
        });
      }
    }
  })

    // var listasLugares = document.getElementsByClassName('lugares')
    // for (var j = 0; j < listasLugares.length; j++) {
    //   listasLugares[j].addEventListener('change', function () {
    //     if (document.getElementById('desde').value != '' && document.getElementById('desde').value != '') {
    //       direccionesModulo.calcularYMostrarRutas()
    //     }
    //   })
    // }
  }

    // Agrega la dirección en las lista de Lugares Intermedios en caso de que no estén
  function agregarDireccionEnLista (direccion, coord) {
      alert('entra en agregar direccion en lista'+ direccion);

    var haceFaltaAgregar = true;

    for (i = 0; i < lugaresIntermedios.length; ++i) {
      if (lugaresIntermedios.options[i].text.replace(/\r?\n|\r/g, ' ') === direccion.replace(/\r?\n|\r/g, ' ')) {
        haceFaltaAgregar = false
      }
    }
    if (haceFaltaAgregar) {
        alert('entra en hace falta agregar');
      var opt = document.createElement('option')
      opt.value = coord
      opt.innerHTML = direccion
      lugaresIntermedios.appendChild(opt);


    }
  }

    // Agrega la dirección en las listas de puntos intermedios y lo muestra con el street view
  function agregarDireccionYMostrarEnMapa (direccion, ubicacion) {
    that = this
    alert('entra en agregar direcciones y mostrar en mapa'+ ubicacion);
    var ubicacionTexto = ubicacion.lat() + ',' + ubicacion.lng();
    agregarDireccionEnLista(direccion, ubicacionTexto)
    mapa.setCenter(ubicacion)
    streetViewModulo.fijarStreetView(ubicacion);
    //alert('entra en agregar direccion y mostrar pra miMarcador'+ubicacion);
    marcadorModulo.mostrarMiMarcador(ubicacion)
  }

  function agregarDireccion (direccion, ubicacion) {alert('estra en agregar direccion IMPORATNTE')
    that = this
    var ubicacionTexto = ubicacion.lat() + ',' + ubicacion.lng()
    agregarDireccionEnLista(direccion, ubicacionTexto)
    mapa.setCenter(ubicacion)
  }

    // Inicializo las variables que muestra el panel y el que calcula las rutas//
  function inicializar () {
    calcularRutasConClic()
        // Agrega la direccion cuando se presioná enter en el campo agregar
    // $('#agregar').keypress(function (e) {
    // if (e.keyCode == 13) {
    //     var direccion = document.getElementById('agregar').value;
    //     marcadorModulo.mostrarMiMarcador(direccion);
    //     geocodificadorModulo.usaDireccion(direccion, direccionesModulo.agregarDireccion)
    //   }
    // });
    //     // Calcula las rutas cuando se presioná enter en el campo desde y hay un valor disitnto a vacío en 'hasta'
    // $('#desde').keypress(function (e) {
    //   if (e.keyCode == 13 && document.getElementById('hasta').value != '') {
    //     direccionesModulo.calcularYMostrarRutas()
    //   }
    // });
    //
    //     // Calcula las rutas cuando se presioná enter en el campo hasta y hay un valor disitnto a vacío en 'desde'
    // $('#hasta').keypress(function (e) {
    //   if (e.keyCode == 13 && document.getElementById('desde').value != '') {
    //     direccionesModulo.calcularYMostrarRutas()
    //   }
    // });
    //

    servicioDirecciones = new google.maps.DirectionsService();
    mostradorDirecciones = new google.maps.DirectionsRenderer({
      draggable: true,
      map: mapa,
      panel: document.getElementById('directions-panel-summary'),
      suppressMarkers: false
    });
    mostradorDirecciones.setMap(mapa);
}

    // Calcula la ruta entre los puntos Desde y Hasta con los puntosIntermedios
    // dependiendo de la formaDeIr que puede ser Caminando, Auto o Bus/Subterraneo/Tren
  function calcularYMostrarRutas () {
  var origen = document.getElementById('desde').value;
  var destino = document.getElementById('hasta').value;
  var comoIr = document.getElementById('comoIr').value;

  var pedidoDeRuta = {
    origin: origen,
    destination: destino,
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: comoIr
  }

  servicioDirecciones.route(pedidoDeRuta, function(response, status) {
    if (status == 'OK') {
      mostradorDirecciones.setDirections(response);
    }
  })
};


        /* Completar la función calcularYMostrarRutas , que dependiendo de la forma en que el
         usuario quiere ir de un camino al otro, calcula la ruta entre esas dos posiciones
         y luego muestra la ruta. */
  return {
    inicializar,
    agregarDireccion,
    agregarDireccionEnLista,
    agregarDireccionYMostrarEnMapa,
    calcularYMostrarRutas
  }
}())

// directionsService.route({
//   origin: document.getElementById('start').value,
//   destination: document.getElementById('end').value,
//   waypoints: waypts,
//   optimizeWaypoints: true,
//   travelMode: 'DRIVING'
// }, function(response, status) {
//   if (status === 'OK') {
//     directionsDisplay.setDirections(response);
//     var route = response.routes[0];
//     var summaryPanel = document.getElementById('directions-panel');
//     summaryPanel.innerHTML = '';
//     // For each route, display summary information.
//     for (var i = 0; i < route.legs.length; i++) {
//       var routeSegment = i + 1;
//       summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
//           '</b><br>';
//       summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//       summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//       summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//     }
//   } else {
//     window.alert('Directions request failed due to ' + status);
//   }
// });




// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//   var waypts = [];
//   var checkboxArray = document.getElementById('waypoints');
//   for (var i = 0; i < checkboxArray.length; i++) {
//     if (checkboxArray.options[i].selected) {
//       waypts.push({
//         location: checkboxArray[i].value,
//         stopover: true
//       });
//     }
//   }
// // }
