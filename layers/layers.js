var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Polygon_1 = new ol.format.GeoJSON();
var features_Polygon_1 = format_Polygon_1.readFeatures(json_Polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_1.addFeatures(features_Polygon_1);
var lyr_Polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_1, 
                style: style_Polygon_1,
                popuplayertitle: "Polygon",
                interactive: true,
                title: '<img src="styles/legend/Polygon_1.png" /> Polygon'
            });
var format_Line_2 = new ol.format.GeoJSON();
var features_Line_2 = format_Line_2.readFeatures(json_Line_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line_2.addFeatures(features_Line_2);
var lyr_Line_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line_2, 
                style: style_Line_2,
                popuplayertitle: "Line",
                interactive: true,
                title: '<img src="styles/legend/Line_2.png" /> Line'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Polygon_1.setVisible(true);lyr_Line_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Polygon_1,lyr_Line_2];
lyr_Polygon_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'townhall_t': 'townhall_t', 'phone': 'phone', 'government': 'government', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'industrial': 'industrial', 'height': 'height', 'denominati': 'denominati', 'official_n': 'official_n', 'tourism': 'tourism', 'sport': 'sport', 'man_made': 'man_made', 'addr_city': 'addr_city', 'historic': 'historic', 'water': 'water', 'building_l': 'building_l', 'access_roo': 'access_roo', 'building_w': 'building_w', 'building_s': 'building_s', 'building': 'building', 'office': 'office', 'religion': 'religion', 'amenity': 'amenity', 'shop': 'shop', 'protect_cl': 'protect_cl', 'natural': 'natural', 'landuse': 'landuse', 'is_in_city': 'is_in_city', 'postal_cod': 'postal_cod', 'wikipedia_': 'wikipedia_', 'is_in_prov': 'is_in_prov', 'leisure': 'leisure', 'name_uk': 'name_uk', 'is_in_coun': 'is_in_coun', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'type': 'type', 'timezone': 'timezone', 'source_pop': 'source_pop', 'short_name': 'short_name', 'ref_kemend': 'ref_kemend', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'name_zh': 'name_zh', 'name_vi': 'name_vi', 'name_su-La': 'name_su-La', 'name_su': 'name_su', 'name_ru': 'name_ru', 'name_pl': 'name_pl', 'name_nl': 'name_nl', 'name_ja': 'name_ja', 'name_id': 'name_id', 'name_es': 'name_es', 'name_en': 'name_en', 'name_de': 'name_de', 'name_cs': 'name_cs', 'name': 'name', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'ISO3166-2': 'ISO3166-2', });
lyr_Line_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'oneway_mot': 'oneway_mot', 'motor_vehi': 'motor_vehi', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'tunnel': 'tunnel', 'tessellate': 'tessellate', 'kml_style': 'kml_style', 'kml_folder': 'kml_folder', 'man_made': 'man_made', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'usage': 'usage', 'gauge': 'gauge', 'electrifie': 'electrifie', 'access': 'access', 'lit': 'lit', 'width': 'width', 'boat': 'boat', 'intermitte': 'intermitte', 'substation': 'substation', 'operator': 'operator', 'location': 'location', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'waterway': 'waterway', 'service': 'service', 'import': 'import', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'cables': 'cables', 'junction': 'junction', 'railway': 'railway', 'maritime': 'maritime', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'natural': 'natural', 'oneway': 'oneway', 'ref': 'ref', 'name': 'name', 'highway': 'highway', });
lyr_Polygon_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'healthcare': '', 'townhall_t': '', 'phone': '', 'government': '', 'addr_stree': '', 'addr_house': '', 'industrial': '', 'height': '', 'denominati': '', 'official_n': '', 'tourism': '', 'sport': '', 'man_made': '', 'addr_city': '', 'historic': '', 'water': '', 'building_l': '', 'access_roo': '', 'building_w': '', 'building_s': '', 'building': '', 'office': '', 'religion': '', 'amenity': '', 'shop': '', 'protect_cl': '', 'natural': '', 'landuse': '', 'is_in_city': '', 'postal_cod': '', 'wikipedia_': '', 'is_in_prov': '', 'leisure': '', 'name_uk': '', 'is_in_coun': '', 'wikipedia': '', 'wikidata': '', 'website': '', 'type': '', 'timezone': '', 'source_pop': '', 'short_name': '', 'ref_kemend': '', 'ref': '', 'population': '', 'populati_1': '', 'name_zh': '', 'name_vi': '', 'name_su-La': '', 'name_su': '', 'name_ru': '', 'name_pl': '', 'name_nl': '', 'name_ja': '', 'name_id': '', 'name_es': '', 'name_en': '', 'name_de': '', 'name_cs': '', 'name': '', 'boundary': '', 'admin_leve': '', 'ISO3166-2': '', });
lyr_Line_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'oneway_mot': '', 'motor_vehi': '', 'maxspeed': '', 'lanes': '', 'foot': '', 'bicycle': '', 'barrier': '', 'tunnel': '', 'tessellate': '', 'kml_style': '', 'kml_folder': '', 'man_made': '', 'motorcycle': '', 'motorcar': '', 'usage': '', 'gauge': '', 'electrifie': '', 'access': '', 'lit': '', 'width': '', 'boat': '', 'intermitte': '', 'substation': '', 'operator': '', 'location': '', 'layer': '', 'bridge': '', 'surface': '', 'waterway': '', 'service': '', 'import': '', 'voltage': '', 'power': '', 'frequency': '', 'cables': '', 'junction': '', 'railway': '', 'maritime': '', 'boundary': '', 'admin_leve': '', 'natural': '', 'oneway': '', 'ref': '', 'name': '', 'highway': '', });
lyr_Polygon_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'townhall_t': 'no label', 'phone': 'no label', 'government': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'industrial': 'no label', 'height': 'no label', 'denominati': 'no label', 'official_n': 'no label', 'tourism': 'no label', 'sport': 'no label', 'man_made': 'no label', 'addr_city': 'no label', 'historic': 'no label', 'water': 'no label', 'building_l': 'no label', 'access_roo': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building': 'no label', 'office': 'no label', 'religion': 'no label', 'amenity': 'no label', 'shop': 'no label', 'protect_cl': 'no label', 'natural': 'no label', 'landuse': 'no label', 'is_in_city': 'no label', 'postal_cod': 'no label', 'wikipedia_': 'no label', 'is_in_prov': 'no label', 'leisure': 'no label', 'name_uk': 'no label', 'is_in_coun': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'website': 'no label', 'type': 'no label', 'timezone': 'no label', 'source_pop': 'no label', 'short_name': 'no label', 'ref_kemend': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'name_zh': 'no label', 'name_vi': 'no label', 'name_su-La': 'no label', 'name_su': 'no label', 'name_ru': 'no label', 'name_pl': 'no label', 'name_nl': 'no label', 'name_ja': 'no label', 'name_id': 'no label', 'name_es': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'name_cs': 'no label', 'name': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'ISO3166-2': 'no label', });
lyr_Line_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'oneway_mot': 'no label', 'motor_vehi': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'tunnel': 'no label', 'tessellate': 'no label', 'kml_style': 'no label', 'kml_folder': 'no label', 'man_made': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'usage': 'no label', 'gauge': 'no label', 'electrifie': 'no label', 'access': 'no label', 'lit': 'no label', 'width': 'no label', 'boat': 'no label', 'intermitte': 'no label', 'substation': 'no label', 'operator': 'no label', 'location': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'waterway': 'no label', 'service': 'no label', 'import': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'cables': 'no label', 'junction': 'no label', 'railway': 'no label', 'maritime': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'natural': 'no label', 'oneway': 'no label', 'ref': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_Line_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});