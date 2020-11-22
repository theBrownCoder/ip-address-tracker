'use strict';

const GEO_URI = "https://geo.ipify.org/api/";
const SECRET_KEY = "at_9pqXfbX3e4qNlO8sVBSa2VL53MkEG";
const GEO_VERSION = "v1";
const DEFAULT_IP = "8.8.4.4";

// Values to update on IP address request
let ip_city = document.getElementById("ip-location");
let ip_region = document.getElementById("ip-location");
let ip_postal_code = document.getElementById("ip-location");
let ip_timezone = document.getElementById("ip-timezone");
let ip_isp = document.getElementById("ip-isp");
let ip_location = document.getElementById("ip-location");

// Initialize the map with the location marker
var mymap = L.map('mapid').setView([38.90720, -77.03690], 13);
var leafletIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [32, 48],
    iconAnchor: [24, 47],
})

var ip_lat = 0; // Represents latitude
var ip_lng = 0; // Represents longitude

// Creates the map tiles
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGhlYnJvd25jb2RlciIsImEiOiJja2hrcHU5ZW0weHpzMnNzZHpzMndod2lzIn0.V7fT7FU9IeBJvvrMxFydvQ',
}).addTo(mymap);

// Gets the IP address from the textbox and sends a request to the ipify API for the details
function getIP() {
    var ip_input = document.getElementById("search-bar").value;
    var ip_address = document.getElementById("ip-address");
    ip_address.textContent = ip_input;

    // The variable that represents the request url for the ip addresse
    var ipRequestURL = `${GEO_URI}${GEO_VERSION}?apiKey=${SECRET_KEY}&ipAddress=${ip_input}`;
    fetch(ipRequestURL)
        .then(results => results.json())
        .then(data => {
            ip_location.innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
            ip_timezone.innerHTML = `UTC ${data.location.timezone}`
            ip_isp.innerHTML = data.isp
            ip_lat = data.location.lat;
            ip_lng = data.location.lng;

            // Initializes the location marker in black, and sets the view to the user selected location latitude and longitude
            var marker = L.marker([ip_lat, ip_lng], {icon:leafletIcon}, 13);
            marker.addTo(mymap);
            mymap.setView(new L.LatLng(ip_lat, ip_lng), 13);
        })
        // Catches any errors in IP address entry
        .catch(error => alert("Please enter a valid IP Address."));
}