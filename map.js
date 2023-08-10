// Crear el mapa
let map = L.map('map').setView([4.639386, -74.082412], 8);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


    
//popup
function popup(feature,layer){
    if(feature.properties && feature.properties.f2){
        layer.bindPopup("<strong>f2: </strong>" + feature.properties.f2 + "<br/>" + "<strong>MPM: </strong>" + feature.properties.MPM + "<br/>" + "<strong>Cognitotal: </strong>" + feature.properties.Cognitotal);
    }
}
    
// Agregar  GeoJson
L.geoJson(cp).addTo(map);

var cognitivopobreJS = L.geoJson(cp,{
    onEachFeature: popup
}).addTo(map);