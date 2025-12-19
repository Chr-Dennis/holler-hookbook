 
const weatherURL = "https://api.open-meteo.com/v1/forecast?";
const weatherURLCondits = "&daily=temperature_2m_max,apparent_temperature_max,rain_sum,wind_gusts_10m_max&models=gfs_seamless&current=apparent_temperature,surface_pressure,cloud_cover,temperature_2m,rain,wind_gusts_10m&timezone=America%2FNew_York&past_days=2&forecast_days=1&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit"
let allLakeCoords;

const lakeCondResult = document.getElementById('lakeCondResult');

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

const resetCondResults = () => {
    lakeCondResult.innerText = "";
    console.clear();
    console.log("Results cleared");
}

async function getLakeConds(lat, lng) {
    try {
        const response = await fetch(`${weatherURL}latitude=${lat}&longitude=${lng}${weatherURLCondits}`);
        const lakeConds = await response.json();
        return lakeConds;
    } catch (error) {
        console.error(`Error encountered: ${error}`);
    }
}

async function displayLakeConds(lake) {
    lakeCondResult.innerText = "";
    try {
        const lakeConds = await getLakeConds(lake.lat, lake.lng);
        const convPressure = (lakeConds.current.surface_pressure / 33.8639).toFixed(2);
        let pressureComp;
        const pressDiff = (convPressure - 29.92).toFixed(2);
        function comparePressure() {
            if (convPressure > 29.92) {
                pressureComp = "Above avg";
                return pressureComp;
            } else if (convPressure < 29.92) {
                pressureComp = "Below avg";
                return pressureComp;
            } else {
                pressureComp = "Avg";
                return pressureComp;
            };
        }
        comparePressure();
        lakeCondResult.style.color = "#1E2A1F";
        const lakeNameH3 = document.createElement('h3');
        lakeNameH3.innerText = `${lake.lakeName}`
        lakeCondResult.append(lakeNameH3);

        const condsDiv = document.createElement('div');
        condsDiv.className = 'conds-div';
        lakeCondResult.append(condsDiv);

        condsDiv.innerHTML = `
            <h3 class="cond-div-h3">Today:</h3>
            <p class="cond-div-p"><strong>Max Temp:</strong> ${lakeConds.daily.temperature_2m_max[2]}${lakeConds.current_units.apparent_temperature}</p>
            <p class="cond-div-p"><strong>Current Temp:</strong> ${lakeConds.current.temperature_2m}${lakeConds.current_units.temperature_2m}</p>
            <p class="cond-div-p feels-like"><strong>Feels Like:</strong> ${lakeConds.current.apparent_temperature}${lakeConds.current_units.apparent_temperature}</p>
            <p class="cond-div-p"><strong>Current Cloud Cover:</strong> ${lakeConds.current.cloud_cover}${lakeConds.current_units.cloud_cover}</p>
            <p class="cond-div-p"><strong>Current Hourly Rainfall:</strong> ${lakeConds.current.rain} ${lakeConds.current_units.rain}es</p>
            <p class="cond-div-p"><strong>Current Surface Pressure:</strong> ${convPressure}inHg<br> ${pressureComp} (${pressDiff}inHg)</p>
            <p class="cond-div-p"><strong>Current Wind Gusts:</strong> ${lakeConds.current.wind_gusts_10m}${lakeConds.current_units.wind_gusts_10m}</p>
            <h3 class="cond-div-h3">Previous 2 Days:</h3>
            <h4 class="cond-div-h4">${lakeConds.daily.time[0]}:</h4>
            <p class="cond-div-p">Max Temp: ${lakeConds.daily.temperature_2m_max[0]}${lakeConds.daily_units.apparent_temperature_max}</p>
            <p class="cond-div-p total-rain">Total Rainfall: ${lakeConds.daily.rain_sum[0]} ${lakeConds.daily_units.rain_sum}es</p>
            <h4 class="cond-div-h4">${lakeConds.daily.time[1]}:</h4>
            <p class="cond-div-p">Max Temp: ${lakeConds.daily.temperature_2m_max[1]}${lakeConds.daily_units.apparent_temperature_max}</p>
            <p class="cond-div-p total-rain">Total Rainfall: ${lakeConds.daily.rain_sum[0]} ${lakeConds.daily_units.rain_sum}es</p>
        `

        lakeCondResult.style.display = 'flex';
        lakeCondResult.style.background = 'linen';
        lakeCondResult.style.borderRadius = '10px';
        lakeCondResult.style.margin = '5px';
    } catch (error) {
        console.error(`Error encountered: ${error}`);
    }
}

lakeBtn1.addEventListener('click', async () => {
    const thisLake = allLakeCoords.data[0];
    resetCondResults();
    getLakeConds(thisLake.lat, thisLake.lng);
    displayLakeConds(thisLake);
})

lakeBtn2.addEventListener('click', async () => {
    const thisLake = allLakeCoords.data[1];
    resetCondResults();
    getLakeConds(thisLake.lat, thisLake.lng);
    displayLakeConds(thisLake);
})

lakeBtn3.addEventListener('click', async () => {
    const thisLake = allLakeCoords.data[2];
    resetCondResults();
    getLakeConds(thisLake.lat, thisLake.lng);
    displayLakeConds(thisLake);
})

lakeBtn4.addEventListener('click', async () => {
    const thisLake = allLakeCoords.data[3];
    resetCondResults();
    getLakeConds(thisLake.lat, thisLake.lng);
    displayLakeConds(thisLake);
})

lakeBtn5.addEventListener('click', async () => {
    const thisLake = allLakeCoords.data[4];
    resetCondResults();
    getLakeConds(thisLake.lat, thisLake.lng);
    displayLakeConds(thisLake);
})

lakeBtn6.addEventListener('click', async () => {
    const thisLake = allLakeCoords.data[5];
    resetCondResults();
    getLakeConds(thisLake.lat, thisLake.lng);
    displayLakeConds(thisLake);
})



