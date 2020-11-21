'use strict';
const GEO_URI = "https://geo.ipify.org/api/";
const SECRET_KEY = at_9pqXfbX3e4qNlO8sVBSa2VL53MkEG;
const GEO_VERSION = "v1";
const DEFAULT_IP = "8.8.4.4";

// Values to update on IP address request
let ip_city = document.getElementById("ip-location");
let ip_region = document.getElementById("ip-location");
let ip_postal_code = document.getElementById("ip-location");
let ip_timezone = document.getElementById("ip-timezone");
let ip_isp = document.getElementById("ip-isp");
let ip_location = document.getElementById("ip-location");

// Gets the IP address from the textbox and sends a request to the ipify API for the details
function getIP () {
    var ip_input = document.getElementById("search-bar").value;
    var ip_address = document.getElementById("ip-address");
    ip_address.textContent = ip_input;

    var ipRequestURL = `${GEO_URI}${GEO_VERSION}?apiKey=${SECRET_KEY}&ipAddress=${ip_input}`;
    fetch(ipRequestURL)
        .then(results => results.json())
        .then(data => {
            ip_location.innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
            ip_timezone.innerHTML = `UTC ${data.location.timezone}`
            ip_isp.innerHTML = data.isp
        })
        .catch(error => alert("Please enter a valid IP Address."))
}
// dameonwilson