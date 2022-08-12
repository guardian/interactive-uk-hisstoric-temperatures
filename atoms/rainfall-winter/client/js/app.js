import { Map as mapGl } from 'maplibre-gl';

console.log('hola')
//main conatiner
const atomEl = document.getElementById('gv-wrapper-winter');

//map dimensions
const width = atomEl.getBoundingClientRect().width;
const height = width * 1.5;

atomEl.style.width = width + 'px';
atomEl.style.height = height + 'px';

//initial and final years, edit if there are one more file for 2022
let iniYear = 1836;
let maxYear = 2021;
let currentYear = iniYear;

const getPath = () => {
    return '<%= path %>/winter-rainfall-img/raster-' + currentYear + '-band1-coloured.png';
}

//initializing the map
let map = new mapGl({
    container: 'gv-wrapper-winter', // container id
    style: {
        version: 8,
        sources: {
            rainfall: {
                type: 'image',
                url: getPath(),
                coordinates: [
                                [-13.019527983, 61.132582888],
                                [3.555117005, 61.132582888],
                                [3.555117005, 47.819456844],
                                [-13.019527983, 47.819456844]
                            ]
            }
        },
        layers:[
            {
                id: 'rainfall-layer',
                type: 'raster',
                source: 'rainfall',
                paint: {
                    'raster-fade-duration': 1,
                    'raster-saturation':.1,
                    'raster-resampling':'linear'
                }
            }

        ]
        
    },
    center: [-0.1015987, 51.5286416],
    zoom: 4,
    interactive: false,
    bounds: [
        [-8.1210017550000000, 50.0478864279999982],
        [1.6789982450000007, 60.7478864280000010]
    ]
});

//after the map is loaded ...
map.on('load', function () {

    //this loop updates the current image. When it reaches last one it starts over again
    //loop set up for every 200 milliseconds

    setInterval(function () {
        document.getElementById('header-year-winter').innerHTML = currentYear

        currentYear++;
        if(currentYear > maxYear)currentYear= iniYear;
        map.getSource('rainfall').updateImage({ url: getPath() });
    }, 200);
});

