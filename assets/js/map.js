var map;
var chicago = new google.maps.LatLng(41.9044, -87.6542);

function initialize() {

  var roadAtlasStyles = [
  {
    "featureType": "landscape",
    "stylers": [
      { "color": "#242424" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "color": "#353535" }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "color": "#292929" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#2e2e2e" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "color": "#282828" }
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      { "color": "#333333" }
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#2e2e2e" }
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#393939" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#282828" }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#676767" }
    ]
  },{
  },{
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" },
      { "color": "#353535" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      { "color": "#353535" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#353535" }
    ]
  }
]

  var mapOptions = {
      zoom: 15,
      center: chicago,
      // draggable: false,
      scrollwheel: false,
      disableDefaultUI: true,
      mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
      }
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
      
  };

  var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('usroadatlas', usRoadMapType);
  map.setMapTypeId('usroadatlas');
}

google.maps.event.addDomListener(window, 'load', initialize);