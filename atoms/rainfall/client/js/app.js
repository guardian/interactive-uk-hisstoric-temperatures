import { Map as mapGl } from 'maplibre-gl';

const atomEl = document.getElementById('gv-wrapper');

const width = atomEl.getBoundingClientRect().width;
const height = width * 1.5;

atomEl.style.width = width + 'px';
atomEl.style.height = height + 'px';

let maxYear = 2021;
let iniYear = 2017;
let currentYear = iniYear;

const getPath = () => {
    return '<%= path %>/png/' + currentYear + '-1.png';
}

let map = new mapGl({
    container: 'gv-wrapper', // container id
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


map.on('load', function () {

    

    setInterval(function () {

        
        document.getElementById('header-year').innerHTML = currentYear

        currentYear++;
        if(currentYear > maxYear)currentYear= iniYear;
        map.getSource('rainfall').updateImage({ url: getPath() });
    }, 500);
});

