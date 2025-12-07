
import getZipCoords from "../../src/getZipCoords.js";
 
const weatherURL = "https://api.weather.gov";
// const Geocodio = require('geocodio-library-node'); 
// const geocoder = new Geocodio(`${process.env.GEOCODIO_API_KEY}`);

const searchZipBtn = document.getElementById("searchZipBtn");

let userZipValue;

searchZipBtn.addEventListener('click', () => {
    userZipValue = document.getElementById("userZipValue").value;
    console.log(userZipValue);
    // getZipCoords(userZipValue);
});

// async function getCitiesByZip() {
//     const endpoint = `https://api.geocod.io/v1.9/geocode?q=${userZipValue}&api_key=${process.env.GEOCODIO_API_KEY}`;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json();
//         const returnedCity = returnedData.results.address_components.city;

//         console.log(returnedCity);
//     } catch (error) {
//         console.error(error);
//     }
// }

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