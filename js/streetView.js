streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
    var posicionCentral = {lat: -34.5337142, lng: -58.47869259999999};
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: posicionCentral,
        pov: {
          heading: 34,
          pitch: 10
        },
        zoom: 1
      });
     //mapa.setStreetView(panorama);
    }

        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */


    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    //var direccion = document.getElementById(ubicacion);
    panorama.setPosition(ubicacion);

        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
