import { Map as mapGl } from 'maplibre-gl';

const atomEl = document.getElementById('gv-wrapper');

const width = 320;
const height = 500;

atomEl.style.width = width + "px";
atomEl.style.height = height + "px";


let map = new mapGl({
    container: 'gv-wrapper', // container id
    style: "https://interactive.guim.co.uk/maptiles/styles/gv-light.json",
    center: [-0.1015987, 51.5286416],
    zoom: 4,
    interactive: false,
    bounds:[
        [-8.1210017550000000,50.0478864279999982],
        [1.6789982450000007,60.7478864280000010]
        ]
});

console.log('hola')
map.on('load', function () {

    console.log('map loaded')

    // Add data layer

    map.addSource('temperatures', {
        type: 'geojson',
        //data: 'https://maplibre.org/maplibre-gl-js-docs/assets/earthquakes.geojson',
        data: '<%= path %>/droughts.geojson',
    });

    let labels = ['DSI12_15_m','DSI12_20_m', 'DSI12_25_m', 'DSI12_30_m', 'DSI12_40_m']

    // Configure Heatmap
    map.addLayer(
        {
            'id': 'temperatures-heat',
            'type': 'heatmap',
            'source': 'temperatures',
            'maxzoom': 22,
            'paint': {
                // Increase the heatmap weight based on frequency and property magnitude
                'heatmap-weight': ['interpolate',['linear'],['get', labels[0]],0,0,70,1],
                // Increase the heatmap color weight by zoom level
                // heatmap-intensity is a multiplier on top of heatmap-weight
                 //'heatmap-intensity': 15,
                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                // Begin color ramp at 0-stop with a 0-transparancy color
                // to create a blur-like effect.
                'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0,
                    'rgba(103,169,207,0)',
                    0.2,
                    'rgba(209,229,240,0)',
                    0.4,
                    'rgb(233,243,248)',
                    0.6,
                    'rgb(253,219,199)',
                    0.8,
                    'rgb(239,138,98)',
                    1,
                    'rgb(178,24,43)'
                ],
                // Adjust the heatmap radius by zoom level
                'heatmap-radius': 20,
                // Transition from heatmap to circle layer by zoom level
                 //'heatmap-opacity':1
                
            }
        }
    );

    let count = 0;

    setInterval( () => {

       let label = labels[count]

       count++

       if(count >= labels.length)count = 0;

       console.log(label)

       map.setPaintProperty('temperatures-heat','heatmap-weight', ['interpolate',['linear'],['get', label],0,0,70,1])



       // map.getSource('temperatures').setData(`<%= path %>/${file}`);

    }, 1000);

    // map.addLayer(
    //     {
    //     'id': 'earthquakes-point',
    //     'type': 'circle',
    //     'source': 'temperatures',
    //     'minzoom': 7,
    //     'paint': {
    //     // Size circle radius by earthquake magnitude and zoom level
    //     'circle-radius': [
    //     'interpolate',
    //     ['linear'],
    //     ['zoom'],
    //     7,
    //     ['interpolate', ['linear'], ['get', 'DSI12_15_m'], 0, 1, 40, 4],
    //     16,
    //     ['interpolate', ['linear'], ['get', 'DSI12_15_m'], 0, 5, 6, 50]
    //     ],
    //     // Color circle by earthquake magnitude
    //     'circle-color': [
    //     'interpolate',
    //     ['linear'],
    //     ['get', 'DSI12_15_m'],
    //     1,
    //     'rgba(33,102,172,0)',
    //     2,
    //     'rgb(103,169,207)',
    //     3,
    //     'rgb(209,229,240)',
    //     4,
    //     'rgb(253,219,199)',
    //     5,
    //     'rgb(239,138,98)',
    //     6,
    //     'rgb(178,24,43)'
    //     ],
    //     'circle-stroke-color': 'white',
    //     'circle-stroke-width': 1,
    //     // Transition from heatmap to circle layer by zoom level
    //     'circle-opacity': [
    //     'interpolate',
    //     ['linear'],
    //     ['zoom'],
    //     7,
    //     0,
    //     8,
    //     1
    //     ]
    //     }
    //     },
    //     'waterway'
    //     );

       
});

