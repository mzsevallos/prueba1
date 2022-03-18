var wms_layers = [];

var format_SUBCUENCA_0 = new ol.format.GeoJSON();
var features_SUBCUENCA_0 = format_SUBCUENCA_0.readFeatures(json_SUBCUENCA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBCUENCA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUBCUENCA_0.addFeatures(features_SUBCUENCA_0);
var lyr_SUBCUENCA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUBCUENCA_0, 
                style: style_SUBCUENCA_0,
                interactive: true,
    title: 'SUB-CUENCA<br />\
    <img src="styles/legend/SUBCUENCA_0_0.png" /> Alto Coata<br />\
    <img src="styles/legend/SUBCUENCA_0_1.png" /> Bajo Coata<br />\
    <img src="styles/legend/SUBCUENCA_0_2.png" /> Cerrillos<br />\
    <img src="styles/legend/SUBCUENCA_0_3.png" /> Cotaña<br />\
    <img src="styles/legend/SUBCUENCA_0_4.png" /> Lampa<br />\
    <img src="styles/legend/SUBCUENCA_0_5.png" /> Medio Alto Coata<br />\
    <img src="styles/legend/SUBCUENCA_0_6.png" /> Medio Bajo Coata<br />\
    <img src="styles/legend/SUBCUENCA_0_7.png" /> Medio Coata<br />\
    <img src="styles/legend/SUBCUENCA_0_8.png" /> Verde<br />\
    <img src="styles/legend/SUBCUENCA_0_9.png" /> <br />'
        });
var format_PSS_cuencas_1 = new ol.format.GeoJSON();
var features_PSS_cuencas_1 = format_PSS_cuencas_1.readFeatures(json_PSS_cuencas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSS_cuencas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSS_cuencas_1.addFeatures(features_PSS_cuencas_1);
var lyr_PSS_cuencas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PSS_cuencas_1, 
                style: style_PSS_cuencas_1,
                interactive: true,
                title: 'PSS_cuencas'
            });
var format_Puno_2 = new ol.format.GeoJSON();
var features_Puno_2 = format_Puno_2.readFeatures(json_Puno_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puno_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puno_2.addFeatures(features_Puno_2);
var lyr_Puno_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puno_2, 
                style: style_Puno_2,
                interactive: true,
                title: '<img src="styles/legend/Puno_2.png" /> Puno'
            });

lyr_SUBCUENCA_0.setVisible(true);lyr_PSS_cuencas_1.setVisible(true);lyr_Puno_2.setVisible(true);
var layersList = [lyr_SUBCUENCA_0,lyr_PSS_cuencas_1,lyr_Puno_2];
lyr_SUBCUENCA_0.set('fieldAliases', {'ID': 'ID', 'NIVEL1': 'NIVEL1', 'NIVEL2': 'NIVEL2', 'NIVEL3': 'NIVEL3', 'NIVEL4': 'NIVEL4', 'NIVEL5': 'NIVEL5', 'NIVEL6': 'NIVEL6', 'NIVEL7': 'NIVEL7', 'NIVEL8': 'NIVEL8', 'NOMB_UH_N1': 'NOMB_UH_N1', 'NOMB_UH_N2': 'NOMB_UH_N2', 'NOMB_UH_N3': 'NOMB_UH_N3', 'NOMB_UH_N4': 'NOMB_UH_N4', 'NOMB_UH_N5': 'NOMB_UH_N5', 'NOMB_UH_N6': 'NOMB_UH_N6', 'NOMB_UH_N7': 'NOMB_UH_N7', 'NOMB_UH_N8': 'NOMB_UH_N8', 'AREA_KM2': 'AREA_KM2', 'AREA_FINAL': 'AREA_FINAL', 'NIVEL': 'NIVEL', 'IMPAR': 'IMPAR', 'last': 'last', 'Nombre_UH': 'Nombre_UH', 'CODIGO': 'CODIGO', 'AREALBERS': 'AREALBERS', 'Area': 'Area', 'DESCARGAR': 'DESCARGAR', 'whatsapp': 'whatsapp', 'NOMBRE': 'NOMBRE', 'Tipo': 'Tipo', 'correo': 'correo', 'Nom_Cu': 'Nom_Cu', });
lyr_PSS_cuencas_1.set('fieldAliases', {'ICOD REGIS': 'ICOD REGIS', 'IDPAP': 'IDPAP', 'Ubigeo': 'Ubigeo', 'DPTO': 'DPTO', 'PROV': 'PROV', 'DIST': 'DIST', 'CCPP': 'CCPP', 'TIPO': 'TIPO', 'X-UTM': 'X-UTM', 'Y-UTM': 'Y-UTM', 'ELEV': 'ELEV', 'FICHA': 'FICHA', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NIVEL1': 'NIVEL1', 'NIVEL2': 'NIVEL2', 'NIVEL3': 'NIVEL3', 'NIVEL4': 'NIVEL4', 'NIVEL5': 'NIVEL5', 'NIVEL6': 'NIVEL6', 'NIVEL7': 'NIVEL7', 'NOMB_UH_N1': 'NOMB_UH_N1', 'NOMB_UH_N2': 'NOMB_UH_N2', 'NOMB_UH_N3': 'NOMB_UH_N3', 'NOMB_UH_N4': 'NOMB_UH_N4', 'NOMB_UH_N5': 'NOMB_UH_N5', 'NOMB_UH_N6': 'NOMB_UH_N6', 'NOMB_UH_N7': 'NOMB_UH_N7', 'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'ORDEN': 'ORDEN', 'AREA_KM2': 'AREA_KM2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Puno_2.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'FUENTE': 'FUENTE', });
lyr_SUBCUENCA_0.set('fieldImages', {'ID': 'TextEdit', 'NIVEL1': 'TextEdit', 'NIVEL2': 'TextEdit', 'NIVEL3': 'TextEdit', 'NIVEL4': 'TextEdit', 'NIVEL5': 'TextEdit', 'NIVEL6': 'TextEdit', 'NIVEL7': 'TextEdit', 'NIVEL8': 'TextEdit', 'NOMB_UH_N1': 'TextEdit', 'NOMB_UH_N2': 'TextEdit', 'NOMB_UH_N3': 'TextEdit', 'NOMB_UH_N4': 'TextEdit', 'NOMB_UH_N5': 'TextEdit', 'NOMB_UH_N6': 'TextEdit', 'NOMB_UH_N7': 'TextEdit', 'NOMB_UH_N8': 'TextEdit', 'AREA_KM2': 'TextEdit', 'AREA_FINAL': 'TextEdit', 'NIVEL': 'TextEdit', 'IMPAR': 'TextEdit', 'last': 'TextEdit', 'Nombre_UH': 'TextEdit', 'CODIGO': 'TextEdit', 'AREALBERS': 'TextEdit', 'Area': 'TextEdit', 'DESCARGAR': 'TextEdit', 'whatsapp': 'TextEdit', 'NOMBRE': 'TextEdit', 'Tipo': 'TextEdit', 'correo': 'TextEdit', 'Nom_Cu': 'TextEdit', });
lyr_PSS_cuencas_1.set('fieldImages', {'ICOD REGIS': 'TextEdit', 'IDPAP': 'TextEdit', 'Ubigeo': 'TextEdit', 'DPTO': 'TextEdit', 'PROV': 'TextEdit', 'DIST': 'TextEdit', 'CCPP': 'TextEdit', 'TIPO': 'TextEdit', 'X-UTM': 'TextEdit', 'Y-UTM': 'TextEdit', 'ELEV': 'TextEdit', 'FICHA': 'TextEdit', 'OBJECTID': 'Range', 'ID': 'Range', 'NIVEL1': 'TextEdit', 'NIVEL2': 'TextEdit', 'NIVEL3': 'TextEdit', 'NIVEL4': 'TextEdit', 'NIVEL5': 'TextEdit', 'NIVEL6': 'TextEdit', 'NIVEL7': 'TextEdit', 'NOMB_UH_N1': 'TextEdit', 'NOMB_UH_N2': 'TextEdit', 'NOMB_UH_N3': 'TextEdit', 'NOMB_UH_N4': 'TextEdit', 'NOMB_UH_N5': 'TextEdit', 'NOMB_UH_N6': 'TextEdit', 'NOMB_UH_N7': 'TextEdit', 'CODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'ORDEN': 'Range', 'AREA_KM2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Puno_2.set('fieldImages', {'IDDPTO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_SUBCUENCA_0.set('fieldLabels', {'ID': 'no label', 'NIVEL1': 'no label', 'NIVEL2': 'no label', 'NIVEL3': 'no label', 'NIVEL4': 'no label', 'NIVEL5': 'no label', 'NIVEL6': 'no label', 'NIVEL7': 'no label', 'NIVEL8': 'no label', 'NOMB_UH_N1': 'no label', 'NOMB_UH_N2': 'no label', 'NOMB_UH_N3': 'no label', 'NOMB_UH_N4': 'no label', 'NOMB_UH_N5': 'no label', 'NOMB_UH_N6': 'no label', 'NOMB_UH_N7': 'no label', 'NOMB_UH_N8': 'no label', 'AREA_KM2': 'no label', 'AREA_FINAL': 'no label', 'NIVEL': 'no label', 'IMPAR': 'no label', 'last': 'no label', 'Nombre_UH': 'no label', 'CODIGO': 'no label', 'AREALBERS': 'no label', 'Area': 'no label', 'DESCARGAR': 'no label', 'whatsapp': 'no label', 'NOMBRE': 'no label', 'Tipo': 'no label', 'correo': 'no label', 'Nom_Cu': 'no label', });
lyr_PSS_cuencas_1.set('fieldLabels', {'ICOD REGIS': 'inline label', 'IDPAP': 'no label', 'Ubigeo': 'no label', 'DPTO': 'no label', 'PROV': 'inline label', 'DIST': 'no label', 'CCPP': 'no label', 'TIPO': 'no label', 'X-UTM': 'no label', 'Y-UTM': 'no label', 'ELEV': 'no label', 'FICHA': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'NIVEL1': 'no label', 'NIVEL2': 'no label', 'NIVEL3': 'no label', 'NIVEL4': 'no label', 'NIVEL5': 'no label', 'NIVEL6': 'no label', 'NIVEL7': 'no label', 'NOMB_UH_N1': 'no label', 'NOMB_UH_N2': 'no label', 'NOMB_UH_N3': 'no label', 'NOMB_UH_N4': 'no label', 'NOMB_UH_N5': 'no label', 'NOMB_UH_N6': 'no label', 'NOMB_UH_N7': 'no label', 'CODIGO': 'inline label', 'NOMBRE': 'inline label', 'ORDEN': 'no label', 'AREA_KM2': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Puno_2.set('fieldLabels', {'IDDPTO': 'no label', 'DEPARTAMEN': 'no label', 'CAPITAL': 'no label', 'FUENTE': 'no label', });
lyr_Puno_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});