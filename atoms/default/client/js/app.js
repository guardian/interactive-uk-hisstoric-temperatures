import { Map as mapGl } from 'maplibre-gl';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const atomEl = document.getElementById('gv-wrapper');

const width = 200;
const height = 440;


months.forEach((month,i) => {

    let div = document.createElement("div")
    let monthWrapper = atomEl.appendChild(div);
    monthWrapper.setAttribute('id', 'div-wrapper' + i)
    
    monthWrapper.style.width = width + "px";
    monthWrapper.style.height = height + "px";

    let map = new mapGl({
    container: 'div-wrapper' + i, // container id
    style: "<%= path %>/blank.json",
    //style: "https://interactive.guim.co.uk/maptiles/styles/gv-light.json",
    center: [-0.1015987, 51.5286416],
    zoom: 6,
    interactive: false,
    bounds:[
        [-8.1210017550000000,50.0478864279999982],
        [1.6789982450000007,60.7478864280000010]
        ]
    });

    if(i<=7)
    {
        map.on('load', () => {
            map.setPaintProperty('temperatures-heat',"heatmap-weight", ["interpolate",["linear"],["get", month + ' 1980'],0,0,40,1])
        })
    }
    else{
        map.on('load', () => {
            map.setPaintProperty('temperatures-heat',"heatmap-weight", 0)
        })
    }

   

})







// const files = [
//     "jan03.geojson",
//     "jan04.geojson",
//     "jan05.geojson",
//     "jan06.geojson",
//     "jan07.geojson",
//     "jan08.geojson",
//     "jan09.geojson",
//     "jan10.geojson",
//     "jan11.geojson",
//     "jan12.geojson",
//     "jan13.geojson",
//     "jan14.geojson",
//     "jan15.geojson",
//     "jan16.geojson",
//     "jan17.geojson",
//     "jan18.geojson",
//     "jan19.geojson",
//     "jan20.geojson",
//     "jan21.geojson",
//     "jan22.geojson"
// ]

// let map = new mapGl({
//     container: 'gv-wrapper', // container id
//     style: "https://interactive.guim.co.uk/maptiles/styles/gv-light.json",
//     center: [-0.1015987, 51.5286416],
//     zoom: 4,
//     interactive: false,
//     bounds:[
//         [-8.1210017550000000,50.0478864279999982],
//         [1.6789982450000007,60.7478864280000010]
//         ]
// });

// console.log('hola')
// map.on('load', function () {

//     console.log('map loaded')

//     // Add data layer

//     map.addSource('temperatures', {
//         type: 'geojson',
//         //data: 'https://maplibre.org/maplibre-gl-js-docs/assets/earthquakes.geojson',
//         data: '<%= path %>/' + files[0],
//     });

//     // Configure Heatmap
//     map.addLayer(
//         {
//             'id': 'temperatures-heat',
//             'type': 'heatmap',
//             'source': 'temperatures',
//             'maxzoom': 22,
//             'paint': {
//                 // Increase the heatmap weight based on frequency and property magnitude
//                 'heatmap-weight': ['interpolate',['linear'],['get', 'maxt'],0,0,20,1],
//                 // Increase the heatmap color weight by zoom level
//                 // heatmap-intensity is a multiplier on top of heatmap-weight
//                  'heatmap-intensity': 1,
//                 // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
//                 // Begin color ramp at 0-stop with a 0-transparancy color
//                 // to create a blur-like effect.
//                 'heatmap-color': [
//                     'interpolate',
//                     ['linear'],
//                     ['heatmap-density'],
//                     0,
//                     'rgba(255,255,255,1)',
//                     0.2,
//                     'rgb(103,169,207)',
//                     0.4,
//                     'rgb(209,229,240)',
//                     0.6,
//                     'rgb(253,219,199)',
//                     0.8,
//                     'rgb(239,138,98)',
//                     1,
//                     'rgb(178,24,43)'
//                 ],
//                 // Adjust the heatmap radius by zoom level
//                 'heatmap-radius': 5,
//                 // Transition from heatmap to circle layer by zoom level
//                  'heatmap-opacity':1
                
//             }
//         }
//     );

//     let count = 0;

//     setInterval( () => {

//        let file = files[count]

//        count++

//        if(count >= files.length)count = 0;

//        console.log(file)

//         map.getSource('temperatures').setData(`<%= path %>/${file}`);

//     }, 1000);

//     // map.addLayer(
//     //     {
//     //     'id': 'earthquakes-point',
//     //     'type': 'circle',
//     //     'source': 'temperatures',
//     //     'minzoom': 7,
//     //     'paint': {
//     //     // Size circle radius by earthquake magnitude and zoom level
//     //     'circle-radius': [
//     //     'interpolate',
//     //     ['linear'],
//     //     ['zoom'],
//     //     7,
//     //     ['interpolate', ['linear'], ['get', 'maxt'], 0, 1, 40, 4],
//     //     16,
//     //     ['interpolate', ['linear'], ['get', 'maxt'], 0, 5, 6, 50]
//     //     ],
//     //     // Color circle by earthquake magnitude
//     //     'circle-color': [
//     //     'interpolate',
//     //     ['linear'],
//     //     ['get', 'maxt'],
//     //     1,
//     //     'rgba(33,102,172,0)',
//     //     2,
//     //     'rgb(103,169,207)',
//     //     3,
//     //     'rgb(209,229,240)',
//     //     4,
//     //     'rgb(253,219,199)',
//     //     5,
//     //     'rgb(239,138,98)',
//     //     6,
//     //     'rgb(178,24,43)'
//     //     ],
//     //     'circle-stroke-color': 'white',
//     //     'circle-stroke-width': 1,
//     //     // Transition from heatmap to circle layer by zoom level
//     //     'circle-opacity': [
//     //     'interpolate',
//     //     ['linear'],
//     //     ['zoom'],
//     //     7,
//     //     0,
//     //     8,
//     //     1
//     //     ]
//     //     }
//     //     },
//     //     'waterway'
//     //     );

       
// });

