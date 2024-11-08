var wms_layers = [];

var format_sawah_0 = new ol.format.GeoJSON();
var features_sawah_0 = format_sawah_0.readFeatures(json_sawah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_0.addFeatures(features_sawah_0);
var lyr_sawah_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_0, 
                style: style_sawah_0,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_0.png" /> sawah'
            });
var format_jalanpathtambakreja_line_1 = new ol.format.GeoJSON();
var features_jalanpathtambakreja_line_1 = format_jalanpathtambakreja_line_1.readFeatures(json_jalanpathtambakreja_line_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanpathtambakreja_line_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanpathtambakreja_line_1.addFeatures(features_jalanpathtambakreja_line_1);
var lyr_jalanpathtambakreja_line_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanpathtambakreja_line_1, 
                style: style_jalanpathtambakreja_line_1,
                popuplayertitle: "jalan path — tambakreja_line",
                interactive: false,
                title: '<img src="styles/legend/jalanpathtambakreja_line_1.png" /> jalan path — tambakreja_line'
            });
var format_hutan_2 = new ol.format.GeoJSON();
var features_hutan_2 = format_hutan_2.readFeatures(json_hutan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hutan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_2.addFeatures(features_hutan_2);
var lyr_hutan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_2, 
                style: style_hutan_2,
                popuplayertitle: "hutan",
                interactive: true,
                title: '<img src="styles/legend/hutan_2.png" /> hutan'
            });
var format_boundarydesa_3 = new ol.format.GeoJSON();
var features_boundarydesa_3 = format_boundarydesa_3.readFeatures(json_boundarydesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundarydesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundarydesa_3.addFeatures(features_boundarydesa_3);
var lyr_boundarydesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundarydesa_3, 
                style: style_boundarydesa_3,
                popuplayertitle: "boundary desa",
                interactive: true,
                title: '<img src="styles/legend/boundarydesa_3.png" /> boundary desa'
            });
var format_rt_4 = new ol.format.GeoJSON();
var features_rt_4 = format_rt_4.readFeatures(json_rt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_4.addFeatures(features_rt_4);
var lyr_rt_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_4, 
                style: style_rt_4,
                popuplayertitle: "rt",
                interactive: true,
    title: 'rt<br />\
    <img src="styles/legend/rt_4_0.png" /> Rt 001 Rw 1<br />\
    <img src="styles/legend/rt_4_1.png" /> Rt 002 Rw 1<br />\
    <img src="styles/legend/rt_4_2.png" /> Rt 003 Rw 1<br />\
    <img src="styles/legend/rt_4_3.png" /> Rt 004 Rw 1<br />\
    <img src="styles/legend/rt_4_4.png" /> Rt 005 Rw 2<br />\
    <img src="styles/legend/rt_4_5.png" /> Rt 006 Rw 2<br />\
    <img src="styles/legend/rt_4_6.png" /> Rt 007 Rw 2<br />\
    <img src="styles/legend/rt_4_7.png" /> Rt 008 Rw 3<br />\
    <img src="styles/legend/rt_4_8.png" /> Rt 009 Rw 3<br />\
    <img src="styles/legend/rt_4_9.png" /> Rt 010 Rw 3<br />\
    <img src="styles/legend/rt_4_10.png" /> Rt 011 Rw 4<br />\
    <img src="styles/legend/rt_4_11.png" /> Rt 012 Rw 4<br />\
    <img src="styles/legend/rt_4_12.png" /> Rt 013 Rw 4<br />\
    <img src="styles/legend/rt_4_13.png" /> Rt 014 Rw 4<br />\
    <img src="styles/legend/rt_4_14.png" /> Rt 015 Rw 4<br />\
    <img src="styles/legend/rt_4_15.png" /> <br />'
        });
var format_jalanresidentialtambakreja_linecopy_5 = new ol.format.GeoJSON();
var features_jalanresidentialtambakreja_linecopy_5 = format_jalanresidentialtambakreja_linecopy_5.readFeatures(json_jalanresidentialtambakreja_linecopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanresidentialtambakreja_linecopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanresidentialtambakreja_linecopy_5.addFeatures(features_jalanresidentialtambakreja_linecopy_5);
var lyr_jalanresidentialtambakreja_linecopy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanresidentialtambakreja_linecopy_5, 
                style: style_jalanresidentialtambakreja_linecopy_5,
                popuplayertitle: "jalan residential — tambakreja_line copy",
                interactive: true,
                title: '<img src="styles/legend/jalanresidentialtambakreja_linecopy_5.png" /> jalan residential — tambakreja_line copy'
            });
var format_Tambakreja_poly_6 = new ol.format.GeoJSON();
var features_Tambakreja_poly_6 = format_Tambakreja_poly_6.readFeatures(json_Tambakreja_poly_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambakreja_poly_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambakreja_poly_6.addFeatures(features_Tambakreja_poly_6);
var lyr_Tambakreja_poly_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambakreja_poly_6, 
                style: style_Tambakreja_poly_6,
                popuplayertitle: "Tambakreja_poly",
                interactive: true,
                title: '<img src="styles/legend/Tambakreja_poly_6.png" /> Tambakreja_poly'
            });
var format_jalantertiarytambakreja_line_7 = new ol.format.GeoJSON();
var features_jalantertiarytambakreja_line_7 = format_jalantertiarytambakreja_line_7.readFeatures(json_jalantertiarytambakreja_line_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalantertiarytambakreja_line_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalantertiarytambakreja_line_7.addFeatures(features_jalantertiarytambakreja_line_7);
var lyr_jalantertiarytambakreja_line_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalantertiarytambakreja_line_7, 
                style: style_jalantertiarytambakreja_line_7,
                popuplayertitle: "jalan tertiary — tambakreja_line",
                interactive: true,
                title: '<img src="styles/legend/jalantertiarytambakreja_line_7.png" /> jalan tertiary — tambakreja_line'
            });
var format_tambakrejapoint_8 = new ol.format.GeoJSON();
var features_tambakrejapoint_8 = format_tambakrejapoint_8.readFeatures(json_tambakrejapoint_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambakrejapoint_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambakrejapoint_8.addFeatures(features_tambakrejapoint_8);
var lyr_tambakrejapoint_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambakrejapoint_8, 
                style: style_tambakrejapoint_8,
                popuplayertitle: "tambakreja point",
                interactive: true,
                title: '<img src="styles/legend/tambakrejapoint_8.png" /> tambakreja point'
            });
var format_sungaitambakreja_line_9 = new ol.format.GeoJSON();
var features_sungaitambakreja_line_9 = format_sungaitambakreja_line_9.readFeatures(json_sungaitambakreja_line_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaitambakreja_line_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaitambakreja_line_9.addFeatures(features_sungaitambakreja_line_9);
var lyr_sungaitambakreja_line_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaitambakreja_line_9, 
                style: style_sungaitambakreja_line_9,
                popuplayertitle: "sungai — tambakreja_line",
                interactive: false,
                title: '<img src="styles/legend/sungaitambakreja_line_9.png" /> sungai — tambakreja_line'
            });
var format_batasdesa_10 = new ol.format.GeoJSON();
var features_batasdesa_10 = format_batasdesa_10.readFeatures(json_batasdesa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_10.addFeatures(features_batasdesa_10);
var lyr_batasdesa_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_10, 
                style: style_batasdesa_10,
                popuplayertitle: "batas desa",
                interactive: false,
    title: 'batas desa<br />\
    <img src="styles/legend/batasdesa_10_0.png" /> Dusun Sidamulya<br />\
    <img src="styles/legend/batasdesa_10_1.png" /> Dusun Sidodadi<br />\
    <img src="styles/legend/batasdesa_10_2.png" /> <br />'
        });
var format_Tambakreja_point_11 = new ol.format.GeoJSON();
var features_Tambakreja_point_11 = format_Tambakreja_point_11.readFeatures(json_Tambakreja_point_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambakreja_point_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambakreja_point_11.addFeatures(features_Tambakreja_point_11);
var lyr_Tambakreja_point_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambakreja_point_11, 
                style: style_Tambakreja_point_11,
                popuplayertitle: "Tambakreja_point",
                interactive: false,
                title: '<img src="styles/legend/Tambakreja_point_11.png" /> Tambakreja_point'
            });

lyr_sawah_0.setVisible(true);lyr_jalanpathtambakreja_line_1.setVisible(true);lyr_hutan_2.setVisible(true);lyr_boundarydesa_3.setVisible(true);lyr_rt_4.setVisible(true);lyr_jalanresidentialtambakreja_linecopy_5.setVisible(true);lyr_Tambakreja_poly_6.setVisible(true);lyr_jalantertiarytambakreja_line_7.setVisible(true);lyr_tambakrejapoint_8.setVisible(true);lyr_sungaitambakreja_line_9.setVisible(true);lyr_batasdesa_10.setVisible(true);lyr_Tambakreja_point_11.setVisible(true);
var layersList = [lyr_sawah_0,lyr_jalanpathtambakreja_line_1,lyr_hutan_2,lyr_boundarydesa_3,lyr_rt_4,lyr_jalanresidentialtambakreja_linecopy_5,lyr_Tambakreja_poly_6,lyr_jalantertiarytambakreja_line_7,lyr_tambakrejapoint_8,lyr_sungaitambakreja_line_9,lyr_batasdesa_10,lyr_Tambakreja_point_11];
lyr_sawah_0.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_jalanpathtambakreja_line_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_hutan_2.set('fieldAliases', {'id': 'id', 'lokasi': 'lokasi', });
lyr_boundarydesa_3.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_rt_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'dusun': 'dusun', 'rw': 'rw', });
lyr_jalanresidentialtambakreja_linecopy_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Tambakreja_poly_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'isced_leve': 'isced_leve', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'addr_house': 'addr_house', });
lyr_jalantertiarytambakreja_line_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_tambakrejapoint_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_sungaitambakreja_line_9.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_batasdesa_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_Tambakreja_point_11.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'isced_leve': 'isced_leve', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'addr_house': 'addr_house', });
lyr_sawah_0.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_jalanpathtambakreja_line_1.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_hutan_2.set('fieldImages', {'id': 'TextEdit', 'lokasi': '', });
lyr_boundarydesa_3.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_rt_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'dusun': 'TextEdit', 'rw': 'TextEdit', });
lyr_jalanresidentialtambakreja_linecopy_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Tambakreja_poly_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'isced_leve': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_jalantertiarytambakreja_line_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_tambakrejapoint_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', });
lyr_sungaitambakreja_line_9.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_batasdesa_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', });
lyr_Tambakreja_point_11.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'isced_leve': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_sawah_0.set('fieldLabels', {'id': 'hidden field', 'nama': 'hidden field', });
lyr_jalanpathtambakreja_line_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_hutan_2.set('fieldLabels', {'id': 'hidden field', 'lokasi': 'no label', });
lyr_boundarydesa_3.set('fieldLabels', {'fid': 'hidden field', 'GID_4': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'no label', 'GID_2': 'hidden field', 'NAME_2': 'no label', 'GID_3': 'hidden field', 'NAME_3': 'hidden field', 'NAME_4': 'no label', 'VARNAME_4': 'hidden field', 'TYPE_4': 'hidden field', 'ENGTYPE_4': 'hidden field', 'CC_4': 'hidden field', });
lyr_rt_4.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', 'dusun': 'inline label - always visible', 'rw': 'inline label - always visible', });
lyr_jalanresidentialtambakreja_linecopy_5.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'amenity': 'hidden field', 'name': 'no label', 'width': 'inline label - always visible', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'no label', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Tambakreja_poly_6.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'roof_mater': 'hidden field', 'amenity': 'hidden field', 'name': 'header label - always visible', 'width': 'hidden field', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'access_roo': 'hidden field', 'building_m': 'hidden field', 'isced_leve': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'natural': 'hidden field', 'oneway': 'hidden field', 'addr_stree': 'hidden field', 'layer': 'hidden field', 'addr_house': 'hidden field', });
lyr_jalantertiarytambakreja_line_7.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'amenity': 'no label', 'name': 'header label - always visible', 'width': 'inline label - visible with data', 'public_tra': 'hidden field', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'hidden field', 'diameter': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'no label', 'surface': 'hidden field', 'pump': 'hidden field', 'oneway': 'hidden field', 'layer': 'hidden field', 'natural': 'hidden field', });
lyr_tambakrejapoint_8.set('fieldLabels', {'id': 'hidden field', 'nama': 'header label - always visible', 'jenis': 'inline label - always visible', });
lyr_sungaitambakreja_line_9.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'no label', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'amenity': 'hidden field', 'name': 'hidden field', 'width': 'hidden field', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'aeroway': 'no label', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'hidden field', 'pump': 'no label', 'oneway': 'hidden field', 'layer': 'hidden field', 'natural': 'hidden field', });
lyr_batasdesa_10.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'jenis': 'hidden field', });
lyr_Tambakreja_point_11.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'no label', 'blockage': 'hidden field', 'roof_mater': 'hidden field', 'amenity': 'no label', 'name': 'header label - always visible', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'isced_leve': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'layer': 'no label', 'addr_house': 'no label', });
lyr_Tambakreja_point_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});