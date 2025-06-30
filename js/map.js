var map = L.map('map', {
    center: [-12.213265631212792, -76.93711674240524],
    zoom: 16,
    minZoom: 3,
    maxZoom: 18,
    
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat
 = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
 subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map)

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
 subdomains:['mt0','mt1','mt2','mt3'] });
 googleHybrid.addTo(map)

 var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
 subdomains:['mt0','mt1','mt2','mt3'] }); 
 googleTerrain.addTo(map)

 var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20,
 subdomains:['mt0','mt1','mt2','mt3'] });
 googleStreets.addTo(map)

var wmsUrl = 'https://www.idep.gob.pe/geoportal/services/IMAGENES/ORTOFOTO_CAÑETE/MapServer/WMSServer?request=GetCapabilities&service=WMS';
 var ortoLima = L.tileLayer.wms(wmsUrl, {
  layers: '0', // Ortomosaico de Lima 2011 desfasado
  format: 'image/png',
  transparent: true
});
ortoLima.addTo(map);


var bares = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:bares", //gisweb:bares Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
bares.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:colegios", //gisweb:colegios Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:farmacias", //gisweb:farmacias Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
farmacias.addTo(map);

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:hospitales", //gisweb:hospitales Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospitales.addTo(map);

var hostales = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:hostales", //gisweb:hostales Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hostales.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:hoteles", //gisweb:hoteles Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hoteles.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:mercados", //gisweb:mercados Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercados.addTo(map);

var parques = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:parques", //gisweb:parques Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
parques.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:restaurantes", //gisweb:restaurantes Villa El Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
restaurantes.addTo(map);

var baseMaps = {
    "OSM": basemapOSM
};

var Villa_el_Salvador = L.tileLayer.wms("http://localhost:8080/geoserver/webgisvillaelsalvador/wms?", {
	   layers: "webgisvillaelsalvador:Villa_el_Salvador", //gisweb:Villa_el_Salvador
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
Villa_el_Salvador.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Satelite": googleSat,
    "Hybrid": googleHybrid,
    "Terrein": googleTerrain,
    "Street": googleStreets,
    "Ortofoto": ortoLima //Descontinuado, desfasado
};


var overlayMaps = {
    "Bares": bares,
    "Colegios": colegios,
    "Farmacias": farmacias,
    "Hospitales": hospitales,
    "Hostales": hostales,
    "Hoteles": hoteles,
    "Parques": parques,
    "Restaurantes": restaurantes,
    "Villa el Salvardor": Villa_el_Salvador
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
  imperial: false
}).addTo(map);
