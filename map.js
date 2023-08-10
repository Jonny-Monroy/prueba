// Crear el mapa
let map = L.map('map').setView([4.639386, -74.082412], 8);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Cargar GeoJSON en las capas desde archivos locales
    var c1 = L.geoJson(cp)
    var c2 = L.geoJson(pobrezacund)
    var c3 = L.geoJson(discapacidadcund)

    var capas = {
        "Pobreza y cognitiva": c1,
        "Pobreza Cundinamarca": c2,
        "Discapacidad Cundinamarca": c3
    };

    layerControl = L.control.layers(capas).addTo(map);