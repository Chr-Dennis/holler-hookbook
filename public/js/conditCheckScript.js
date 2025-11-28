
const weatherURL = "https://api.weather.gov";
const zipSearchBtn = document.getElementById("zipSearchBtn");
const testCities = [
    {
        "id": "1",
        "city": "London",
        "zipCode": "40741",
        "latLong": "37.129986, -84.084122"
    },
    {
        "id": "2",
        "city": "Somerset",
        "zipCode": "",
        "latLong": "37.091852, -84.605055"
    },
    {
        "id": "3",
        "city": "Corbin",
        "zipCode": "40740",
        "latLong": "36.956854, -84.606400"
    },
    {
        "id": "4",
        "city": "Mt. Vernon",
        "zipCode": "",
        "latLong": ""
    },
    {
        "id": "5",
        "city": "Berea",
        "zipCode": "",
        "latLong": ""
    },
]

let weatherData = [];


async function getWeatherData() {
    try {
        const response = await fetch(weatherURL);
        weatherData = await response.json();
        console
    } catch(error) {
        console.error(`There was an error: ${error}`);
    }
}
