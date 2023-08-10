// Crear el mapa
let map = L.map('map').setView([4.639386, -74.082412], 8);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Definir estilos para las capas GeoJSON
function estiloC1(valor) {
    return valor >= 0 && valor < 0.1? '#0570b0' :
           valor >= 0.1 && valor < 0.2 ? '#3690c0' :
           valor >= 0.2 && valor < 0.4 ? '#74a9cf' :
           valor >= 0.4 && valor < 0.6 ? '#a6bddb' :
           valor >= 0.6 && valor < 1 ?'#d0d1e6':
                                      '#d0d1e6';
}

var estiloC2 = {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.4
};

var estiloC3 = {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.4
};

// Cargar GeoJSON en las capas desde archivos locales
    var c1 = L.geoJson(cp,{
        style: function(feature) {
            return {
                color: estiloC1(feature.properties.puntajpond),
                fillColor: estiloC1(feature.properties.puntajpond),
                fillOpacity: 0.6
            };
        },
        onEachFeature: function(feature, layer) {
            // Agregar etiquetas del atributo "puntajpond" como contenido emergente (popup)
            var popupContent = '<strong>Pobreza y cognitiva</strong><br>';
            popupContent += 'Puntaje ponderado: ' + feature.properties.puntajpond + '<br>';
            layer.bindPopup(popupContent);
            
        }
    });
    var c2 = L.geoJson(pobrezacund,{
        style: estiloC2,
        onEachFeature: function(feature, layer) {
            // Agregar información emergente (popup) con los atributos
            var popupContent = '<strong>Pobreza Cundinamarca</strong><br>';
            for (var prop in feature.properties) {
                popupContent += prop + ': ' + feature.properties[prop] + '<br>';
            }
            layer.bindPopup(popupContent);
        }
    });
    var c3 = L.geoJson(discapacidadcund,{
        style: estiloC3,
        onEachFeature: function(feature, layer) {
            // Agregar información emergente (popup) con los atributos
            var popupContent = '<strong>Discapacidad Cundinamarca</strong><br>';
            for (var prop in feature.properties) {
                popupContent += prop + ': ' + feature.properties[prop] + '<br>';
            }
            layer.bindPopup(popupContent);
        }
    });

    var capas = {
        "Pobreza y cognitiva": c1,
        "Pobreza Cundinamarca": c2,
        "Discapacidad Cundinamarca": c3
    };

    layerControl = L.control.layers(capas).addTo(map);