var size = 0;
var placement = 'point';
function categories_RoadsbyFunctionalClas_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'A - Trunk':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,16,68,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.9399999999999995}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'B - Link':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,134,40,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.18}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'C - Main Access':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,143,235,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'D - Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,216,8,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,249,244,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RoadsbyFunctionalClas_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("RFC_Class");
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'Open Sans\', sans-serif";
    var labelFill = "#ffd503";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Road_Name") !== null) {
        labelText = String(feature.get("Road_Name"));
    }
    
var style = categories_RoadsbyFunctionalClas_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
