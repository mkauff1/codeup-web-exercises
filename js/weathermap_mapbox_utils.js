"use strict";

mapboxgl.accessToken = MAP_KEY;

let geocoder;
let marker;
let popup;

/**
 * Invoke the initial functions to kick off our application
 * **/
init();
setGeocoderEventListener();


/**Define a function to instantiate the map and geocoder objects and bind them together**/
function init() {

    /*Make the mapbox map object, set to map variable declared above*/
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-83.17823878255246, 42.1417394047964],
        zoom: 10
    });

    /*Make the geocoder object, set to the geocoder variable declared above*/
    geocoder = new MapboxGeocoder({
        accessToken: MAP_KEY,
        mapboxgl: mapboxgl,
        marker: true
    });

    /*Add the geocoder variable value to the map as a control (form input)*/
    map.addControl(geocoder);
}

/**
 * Utility function to get a new Marker object whenever invoked
 * param coordinates: number array containing the lng lat of the location
 * **/
function getMarker(coordinates) {
    return new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
}


/**
 * Utility function to get a new Popup object whenever invoked
 * param description: string represented details of the location
 * param coordinates: number array containing the lng lat of the location
 * **/
function getPopup(description, coordinates) {
    return new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<p>${description}</p>`)
        .addTo(map);
}


/**
 * Encapsulates code to listen for the geocoder to return a result and allows us to get new Marker and Popup objects
 * **/
function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        /*We need to ensure marker/popup variables hoisted at the top actual *have* a value
        * Otherwise, calling a remove() method on a non-existent object will result in a runtime error
        * */
        console.log(e.result);
        if (marker) {
            marker.remove();
        }
        if (popup) {
            popup.remove();
        }

        /*Finally, set the hoisted marker/popup variables to new respective objects*/
        //marker = getMarker(e.result.geometry.coordinates);
        //popup = getPopup(e.result.place_name, e.result.geometry.coordinates);
        cityLat = e.result.center[1];

        cityLon = e.result.center[0];
        console.log(cityLat, cityLon);
        getWeatherData();
    });
}