import mainHTML from "./atoms/default/server/templates/main.html!text"
// import { readdir, readFileSync, writeFileSync } from "fs"

// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// let allFilesRaw = [];

// readdir('./shared/data', (err, files) => {

//     files.forEach(d => {

//         const file = readFileSync('./shared/data/' + d, 'utf-8');

//         const json = JSON.parse(file);

        

//         allFilesRaw.push(json)
        
//     })

//     //const values = allFilesRaw.filter(f => f.location.values)

//    //const januaries = allFilesRaw.filter(f => values.value.datetimeStr.indexOf('Jan') != -1)

//    months.forEach(m => {

//     let month = [];

//     allFilesRaw.forEach(f => {
//         let location = [f.location.latitude, f.location.longitude]
//         let monthTemp = f.location.values.filter(v => v.value.datetimeStr.indexOf(m) != -1 && parseInt(v.value.datetimeStr.split(' ')[1]) >= 1980)


//         monthTemp.forEach(j => {

//             month.push(
//                 {
//                     datetimeStr: j.value.datetimeStr,
//                     maxt:j.value.maxt,
//                     precip:j.value.precip,
//                     location:j.value.location = location
//                 }
//             )
            
//             j
//         })
//     })

//     writeFileSync(`assets/${m}.json`, JSON.stringify(month));

//     //console.log(januaries)

//    })

    

    

// })




// months.forEach(m => {

//     let month = {
//                     "type": "FeatureCollection",
//                     "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
//                     "features": []
//                 }


    

// })


    
    

// readdir('./shared/data', (err, files) => {

//     for (let i = 0; i < 12; i++) {

//         let month = {
//             "type": "FeatureCollection",
//             "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
//             "features": []
//         }

//         files.forEach(d => {

//             const file = readFileSync('./shared/data/' + d, 'utf-8');

//             const json = JSON.parse(file);

//             const jan = json.location.values.find(f => f.value.datetimeStr === 'Jan ' + year)

//             const location = [json.location.longitude,json.location.latitude]

//             january.features.push({
//                 type:'Feature',
//                 properties:{
//                     maxt:jan.value.maxt,
//                     precip:jan.value.precip
//                 },
//                 geometry:{
//                     type:'Point',
//                     coordinates:location
//                 }            
//             })

//         })
//     }

//     writeFileSync(`assets/jan03.geojson`, JSON.stringify(january));
// })

// const file = readFileSync('./assets/jan22.geojson', 'utf-8');

// const json = JSON.parse(file);

// const temps = json.features.map(f => f.properties.maxt);


// console.log(Math.min.apply(Math,temps))
// console.log(Math.max.apply(Math,temps))


export async function render() {
    return mainHTML;
} 