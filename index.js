var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// var marker = L.marker = L.marker([51.5, -0.09]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGhlYnJvd25jb2RlciIsImEiOiJja2hrcHU5ZW0weHpzMnNzZHpzMndod2lzIn0.V7fT7FU9IeBJvvrMxFydvQ'
}).addTo(mymap);