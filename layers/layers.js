var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RNMBOsBoundary_2 = new ol.format.GeoJSON();
var features_RNMBOsBoundary_2 = format_RNMBOsBoundary_2.readFeatures(json_RNMBOsBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RNMBOsBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RNMBOsBoundary_2.addFeatures(features_RNMBOsBoundary_2);
var lyr_RNMBOsBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RNMBOsBoundary_2, 
                style: style_RNMBOsBoundary_2,
                popuplayertitle: "RNMBO's Boundary",
                interactive: true,
                title: '<img src="styles/legend/RNMBOsBoundary_2.png" /> RNMBO\'s Boundary'
            });
var format_RoadsbyPavement_3 = new ol.format.GeoJSON();
var features_RoadsbyPavement_3 = format_RoadsbyPavement_3.readFeatures(json_RoadsbyPavement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsbyPavement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsbyPavement_3.addFeatures(features_RoadsbyPavement_3);
var lyr_RoadsbyPavement_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsbyPavement_3, 
                style: style_RoadsbyPavement_3,
                popuplayertitle: "Roads by Pavement ",
                interactive: true,
    title: 'Roads by Pavement <br />\
    <img src="styles/legend/RoadsbyPavement_3_0.png" /> Paved<br />\
    <img src="styles/legend/RoadsbyPavement_3_1.png" /> Unpaved<br />\
    <img src="styles/legend/RoadsbyPavement_3_2.png" /> Paved/Unpaved<br />\
    <img src="styles/legend/RoadsbyPavement_3_3.png" /> <br />'
        });
var format_RoadsbyFunctionalClas_4 = new ol.format.GeoJSON();
var features_RoadsbyFunctionalClas_4 = format_RoadsbyFunctionalClas_4.readFeatures(json_RoadsbyFunctionalClas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsbyFunctionalClas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsbyFunctionalClas_4.addFeatures(features_RoadsbyFunctionalClas_4);
var lyr_RoadsbyFunctionalClas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsbyFunctionalClas_4, 
                style: style_RoadsbyFunctionalClas_4,
                popuplayertitle: "Roads by Functional Clas",
                interactive: true,
    title: 'Roads by Functional Clas<br />\
    <img src="styles/legend/RoadsbyFunctionalClas_4_0.png" /> A - Trunk<br />\
    <img src="styles/legend/RoadsbyFunctionalClas_4_1.png" /> B - Link<br />\
    <img src="styles/legend/RoadsbyFunctionalClas_4_2.png" /> C - Main Access<br />\
    <img src="styles/legend/RoadsbyFunctionalClas_4_3.png" /> D - Collector<br />\
    <img src="styles/legend/RoadsbyFunctionalClas_4_4.png" /> <br />'
        });
var format_RoadsbySurfaceType_5 = new ol.format.GeoJSON();
var features_RoadsbySurfaceType_5 = format_RoadsbySurfaceType_5.readFeatures(json_RoadsbySurfaceType_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsbySurfaceType_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsbySurfaceType_5.addFeatures(features_RoadsbySurfaceType_5);
var lyr_RoadsbySurfaceType_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsbySurfaceType_5, 
                style: style_RoadsbySurfaceType_5,
                popuplayertitle: "Roads by Surface Type",
                interactive: true,
    title: 'Roads by Surface Type<br />\
    <img src="styles/legend/RoadsbySurfaceType_5_0.png" /> AC<br />\
    <img src="styles/legend/RoadsbySurfaceType_5_1.png" /> AC/GN<br />\
    <img src="styles/legend/RoadsbySurfaceType_5_2.png" /> DBST<br />\
    <img src="styles/legend/RoadsbySurfaceType_5_3.png" /> GN<br />\
    <img src="styles/legend/RoadsbySurfaceType_5_4.png" /> <br />'
        });
var group_DireDwaRNMBOsRoadNetworkData = new ol.layer.Group({
                                layers: [lyr_RNMBOsBoundary_2,lyr_RoadsbyPavement_3,lyr_RoadsbyFunctionalClas_4,lyr_RoadsbySurfaceType_5,],
                                fold: "open",
                                title: "Dire Dwa RNMBO's Road Network Data"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_RNMBOsBoundary_2.setVisible(true);lyr_RoadsbyPavement_3.setVisible(true);lyr_RoadsbyFunctionalClas_4.setVisible(true);lyr_RoadsbySurfaceType_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,group_DireDwaRNMBOsRoadNetworkData];
lyr_RNMBOsBoundary_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DISTRICTS_': 'DISTRICTS_', 'Area_Km2': 'Area_Km2', 'Shape_Leng': 'Shape_Leng', 'Asphalt_Km': 'Asphalt_Km', 'Gravel_Km': 'Gravel_Km', 'Total': 'Total', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_RoadsbyPavement_3.set('fieldAliases', {'RFC_Class': 'RFC_Class', 'RFC_ID': 'RFC_ID', 'Road_Name': 'Road_Name', 'Asphalt': 'Asphalt', 'Gravel': 'Gravel', 'Total': 'Total', 'District': 'District', 'Section_': 'Section_', 'Pavement': 'Pavement', 'Surface_Ty': 'Surface_Ty', 'Design_Sta': 'Design_Sta', 'StartX': 'StartX', 'EndX': 'EndX', 'StartY': 'StartY', 'EndY': 'EndY', 'Status': 'Status', 'Status2': 'Status2', });
lyr_RoadsbyFunctionalClas_4.set('fieldAliases', {'RFC_Class': 'RFC_Class', 'RFC_ID': 'RFC_ID', 'Road_Name': 'Road_Name', 'Asphalt': 'Asphalt', 'Gravel': 'Gravel', 'Total': 'Total', 'District': 'District', 'Section_': 'Section_', 'Pavement': 'Pavement', 'Surface_Ty': 'Surface_Ty', 'Design_Sta': 'Design_Sta', 'StartX': 'StartX', 'EndX': 'EndX', 'StartY': 'StartY', 'EndY': 'EndY', 'Status': 'Status', 'Status2': 'Status2', });
lyr_RoadsbySurfaceType_5.set('fieldAliases', {'RFC_Class': 'RFC_Class', 'RFC_ID': 'RFC_ID', 'Road_Name': 'Road_Name', 'Asphalt': 'Asphalt', 'Gravel': 'Gravel', 'Total': 'Total', 'District': 'District', 'Section_': 'Section_', 'Pavement': 'Pavement', 'Surface_Ty': 'Surface_Ty', 'Design_Sta': 'Design_Sta', 'StartX': 'StartX', 'EndX': 'EndX', 'StartY': 'StartY', 'EndY': 'EndY', 'Status': 'Status', 'Status2': 'Status2', });
lyr_RNMBOsBoundary_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICTS_': 'TextEdit', 'Area_Km2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Asphalt_Km': 'TextEdit', 'Gravel_Km': 'TextEdit', 'Total': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RoadsbyPavement_3.set('fieldImages', {'RFC_Class': 'TextEdit', 'RFC_ID': 'TextEdit', 'Road_Name': 'TextEdit', 'Asphalt': 'TextEdit', 'Gravel': 'TextEdit', 'Total': 'TextEdit', 'District': 'TextEdit', 'Section_': 'TextEdit', 'Pavement': 'TextEdit', 'Surface_Ty': 'TextEdit', 'Design_Sta': 'TextEdit', 'StartX': 'TextEdit', 'EndX': 'TextEdit', 'StartY': 'TextEdit', 'EndY': 'TextEdit', 'Status': 'TextEdit', 'Status2': 'TextEdit', });
lyr_RoadsbyFunctionalClas_4.set('fieldImages', {'RFC_Class': 'TextEdit', 'RFC_ID': 'TextEdit', 'Road_Name': 'TextEdit', 'Asphalt': 'TextEdit', 'Gravel': 'TextEdit', 'Total': 'TextEdit', 'District': 'TextEdit', 'Section_': 'TextEdit', 'Pavement': 'TextEdit', 'Surface_Ty': 'TextEdit', 'Design_Sta': 'TextEdit', 'StartX': 'TextEdit', 'EndX': 'TextEdit', 'StartY': 'TextEdit', 'EndY': 'TextEdit', 'Status': 'TextEdit', 'Status2': 'TextEdit', });
lyr_RoadsbySurfaceType_5.set('fieldImages', {'RFC_Class': 'TextEdit', 'RFC_ID': 'TextEdit', 'Road_Name': 'TextEdit', 'Asphalt': 'TextEdit', 'Gravel': 'TextEdit', 'Total': 'TextEdit', 'District': 'TextEdit', 'Section_': 'TextEdit', 'Pavement': 'TextEdit', 'Surface_Ty': 'TextEdit', 'Design_Sta': 'TextEdit', 'StartX': 'TextEdit', 'EndX': 'TextEdit', 'StartY': 'TextEdit', 'EndY': 'TextEdit', 'Status': 'TextEdit', 'Status2': 'TextEdit', });
lyr_RNMBOsBoundary_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DISTRICTS_': 'no label', 'Area_Km2': 'no label', 'Shape_Leng': 'no label', 'Asphalt_Km': 'no label', 'Gravel_Km': 'no label', 'Total': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_RoadsbyPavement_3.set('fieldLabels', {'RFC_Class': 'inline label - always visible', 'RFC_ID': 'inline label - always visible', 'Road_Name': 'inline label - always visible', 'Asphalt': 'inline label - always visible', 'Gravel': 'inline label - always visible', 'Total': 'inline label - always visible', 'District': 'no label', 'Section_': 'inline label - always visible', 'Pavement': 'inline label - always visible', 'Surface_Ty': 'inline label - always visible', 'Design_Sta': 'inline label - always visible', 'StartX': 'inline label - always visible', 'EndX': 'inline label - always visible', 'StartY': 'inline label - always visible', 'EndY': 'inline label - always visible', 'Status': 'hidden field', 'Status2': 'inline label - always visible', });
lyr_RoadsbyFunctionalClas_4.set('fieldLabels', {'RFC_Class': 'inline label - always visible', 'RFC_ID': 'no label', 'Road_Name': 'inline label - always visible', 'Asphalt': 'inline label - always visible', 'Gravel': 'inline label - always visible', 'Total': 'inline label - always visible', 'District': 'no label', 'Section_': 'inline label - always visible', 'Pavement': 'inline label - always visible', 'Surface_Ty': 'inline label - always visible', 'Design_Sta': 'inline label - always visible', 'StartX': 'inline label - always visible', 'EndX': 'inline label - always visible', 'StartY': 'inline label - always visible', 'EndY': 'inline label - always visible', 'Status': 'hidden field', 'Status2': 'inline label - always visible', });
lyr_RoadsbySurfaceType_5.set('fieldLabels', {'RFC_Class': 'inline label - always visible', 'RFC_ID': 'no label', 'Road_Name': 'inline label - always visible', 'Asphalt': 'inline label - always visible', 'Gravel': 'inline label - always visible', 'Total': 'inline label - always visible', 'District': 'no label', 'Section_': 'inline label - always visible', 'Pavement': 'inline label - always visible', 'Surface_Ty': 'inline label - always visible', 'Design_Sta': 'inline label - always visible', 'StartX': 'inline label - always visible', 'EndX': 'inline label - always visible', 'StartY': 'inline label - always visible', 'EndY': 'inline label - always visible', 'Status': 'hidden field', 'Status2': 'inline label - always visible', });
lyr_RoadsbySurfaceType_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});