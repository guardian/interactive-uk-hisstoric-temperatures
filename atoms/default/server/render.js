import mainHTML from "./atoms/default/server/templates/main.html!text"
// import { readdir, readFileSync, writeFileSync } from "fs"

// let january = {date:'Jan 2022', data:[]}

// readdir('./shared/data', (err, files) => {

//     files.forEach(d => {

//         const file = readFileSync('./shared/data/' + d, 'utf-8');

//         const json = JSON.parse(file);

//         const jan = json.location.values.find(f => f.value.datetimeStr === 'Jan 2022')

//         const location = [json.location.latitude,json.location.longitude]

//         january.data.push({
//             //file:d,
//             location:location,
//             maxt:jan.value.maxt,
//             precip:jan.value.precip
//         })

//     })

//     writeFileSync(`assets/jan22.json`, JSON.stringify(january));
// })

export async function render() {
    return mainHTML;
} 