 
const weatherURL = "https://api.weather.gov";


const searchZipBtn = document.getElementById("searchZipBtn");

let userZipValue;

// searchZipBtn.addEventListener('click', () => {
//     userZipValue = document.getElementById("userZipValue").value;
//     console.log(userZipValue);
//     // getZipCoords(userZipValue);
// });

async function sendUserZip(zip) {
    
}

let weatherData = [];

    // async function getWeatherData() {
    //     try {
    //         const response = await fetch(weatherURL);
    //         weatherData = await response.json();
    //         console
    //     } catch(error) {
    //         console.error(`There was an error: ${error}`);
    //     }
    // }