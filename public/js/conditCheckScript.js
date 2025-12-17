 
const weatherURL = "https://api.open-meteo.com/v1/forecast?";
const weatherURLCondits = "&daily=temperature_2m_max,apparent_temperature_max,rain_sum,wind_gusts_10m_max&models=gfs_seamless&current=apparent_temperature,surface_pressure,cloud_cover,temperature_2m,rain,wind_gusts_10m&timezone=America%2FNew_York&past_days=5&forecast_days=1&temperature_unit=fahrenheit"
let allLakeCoords;

async function getLakeCoords() {
    try {
        const response = await fetch('./api/data/lake-coords');
        allLakeCoords = await response.json();
        console.log(allLakeCoords);
        return allLakeCoords;
    } catch (error) {
        console.error (`Error encountered: ${error}`);
    }
}

getLakeCoords();

async function getLakeWeather(lat, lng) {
    try {
        const response = await fetch(`${weatherURL}latitude=${lat}&longitude=${lng}${weatherURLCondits}`);
        const specificLakeWeather = await response.json();
        console.log(specificLakeWeather);
    } catch (error) {
        console.error (`Error encountered: ${error}`);
    }
}

lakeBtn1.addEventListener('click', async () => {
    console.log(allLakeCoords.data[0].lakeName, allLakeCoords.data[0].lat, allLakeCoords.data[0].lng); 
    getLakeWeather(allLakeCoords.data[0].lat, allLakeCoords.data[0].lng);
})

lakeBtn2.addEventListener('click', async () => {
    console.log(allLakeCoords.data[1].lakeName, allLakeCoords.data[1].lat, allLakeCoords.data[1].lng); 
    getLakeWeather(allLakeCoords.data[1].lat, allLakeCoords.data[1].lng);
})

lakeBtn3.addEventListener('click', async () => {
    console.log(allLakeCoords.data[2].lakeName, allLakeCoords.data[2].lat, allLakeCoords.data[2].lng); 
    getLakeWeather(allLakeCoords.data[2].lat, allLakeCoords.data[2].lng);
})

lakeBtn4.addEventListener('click', async () => {
    console.log(allLakeCoords.data[3].lakeName, allLakeCoords.data[3].lat, allLakeCoords.data[3].lng); 
    getLakeWeather(allLakeCoords.data[3].lat, allLakeCoords.data[3].lng);
})

lakeBtn5.addEventListener('click', async () => {
    console.log(allLakeCoords.data[4].lakeName, allLakeCoords.data[4].lat, allLakeCoords.data[4].lng); 
    getLakeWeather(allLakeCoords.data[4].lat, allLakeCoords.data[4].lng);
})

lakeBtn6.addEventListener('click', async () => {
    console.log(allLakeCoords.data[5].lakeName, allLakeCoords.data[5].lat, allLakeCoords.data[5].lng); 
    getLakeWeather(allLakeCoords.data[5].lat, allLakeCoords.data[5].lng);
})



