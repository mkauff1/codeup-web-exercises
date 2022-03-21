"use strict";

mapboxgl.accessToken = MAP_KEY;
let startingLat = 29.4252;
let startingLon = -98.4916;

let map = initMap(startingLon, startingLat);
let geocoder = initGeoCoder();
let marker = createMarker(startingLon, startingLat);
let popup = createPopup(startingLon, startingLat);

let currentLocation = [startingLon, startingLat];
marker = createMarker(currentLocation);

// add geocoder search box to map
map.addControl(
    geocoder
);

setGeocoderEventListener();

marker.setPopup(popup);

// function to create map
function initMap(lon, lat) {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 10,
        center: [lon, lat]
    });
}

// function to create marker
function createMarker(lon, lat) {
    return new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map);
}

// function to create popup
function createPopup(lon, lat) {
    return new mapboxgl.Popup()
        .setLngLat([lon, lat])
        .setHTML("<p>Codeup Rocks!</p>")
}

// function to create geocoder
function initGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
}

// geocode with built in geocoder just getting the center map will automatically fly to entered location
function setGeocoderEventListener() {
    geocoder.on('result', function (e) {
        console.log(e.result)

        if (marker) {
            marker.remove();
        }
        if (popup) {
            popup.remove();
        }
        cityLat = e.result.center[1];
        cityLon = e.result.center[0];
        console.log(cityLat, cityLon);

        getWeatherData();
    });
}

map.on('click', function (e) {
    console.log(e);
    marker = createMarker([e.lngLat.lng, e.lngLat.lat]);
    getWeatherData(e.lngLat.lat, e.lngLat.lng);
})