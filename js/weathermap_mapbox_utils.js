"use strict";

mapboxgl.accessToken = MAP_KEY;
var geocoder;
var marker;
var popup;
let currentLocation = [-83.17823878255246, 42.1417394047964];
let map;

// Invoke the initial functions to kick off our application
init();
setGeocoderEventListener();
marker = getMarker(currentLocation);
/**Define a function to instantiate the map and geocoder objects and bind them together**/
function init() {

    /*Make the mapbox map object, set to map variable declared above*/
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-83.17823878255246, 42.1417394047964], //
        zoom: 10
    });

    /*Make the geocoder object, set to the geocoder variable declared above*/
    geocoder = new MapboxGeocoder({
        accessToken: MAP_KEY,
        mapboxgl: mapboxgl,
        marker: false
    });

    /*Add the geocoder variable value to the map as a control (form input)*/
    map.addControl(geocoder);
}
function onDragEnd(){
    console.log(marker.getLngLat());
}
/*
function createMarker(coordinates){
    if(marker){
        marker.remove();
    }
}
*/
function getMarker(coordinates) {
    return new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(coordinates)
        .addTo(map);
}

/**
 function getPopup(description, coordinates) {
    return new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<p>${description}</p>`)
        .addTo(map);
}**/

//Encapsulates code to listen for the geocoder to return a result and allows us to get new Marker and Popup objects
function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        /*We need to ensure marker/popup variables hoisted at the top actual *have* a value
        * Otherwise, calling a remove() method on a non-existent object will result in a runtime error */
        //geocoder.clear();
        console.log(e.result);
        if (marker) {
            marker.remove();
        }
        if (popup) {
            popup.remove();
        }

        /*Finally, set the hoisted marker/popup variables to new respective objects*/
        //popup = getPopup(e.result.place_name, e.result.geometry.coordinates);
        cityLat = e.result.center[1];
        cityLon = e.result.center[0];
        console.log(cityLat, cityLon);
        marker = getMarker(e.result.center);

        marker.on('dragend', onDragEnd);
        getWeatherData();
    });
}
marker.on('dragend', onDragEnd);
/*
// reverse geocode method from mapbox-geocoder-utils.js
reverseGeocode({lng: -98.4861, lat: 29.4260}, accessToken).then(function(results) {
    // logs the address for The Alamo
    console.log(results);
});
*/