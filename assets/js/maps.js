function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -33.134766
    }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js';
  script.async = true;

  script.addEventListener('load', () => {
    const markerCluster = new window.markerClusterer.MarkerClusterer({ map, markers });
  });

  document.head.appendChild(script);
}