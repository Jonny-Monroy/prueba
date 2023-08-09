// Crear el mapa
var map = L.map('map').setView([51.505, -0.09], 13);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar marcador
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Un marcador de ejemplo')
    .openPopup();
