
const weatherURL = "https://api.weather.gov";
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
        "zipCode": "42501",
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
        "city": "Campton",
        "zipCode": "41301",
        "latLong": "37.734037, -83.549741"
    },
    {
        "id": "5",
        "city": "Berea",
        "zipCode": "40404",
        "latLong": "37.572042, -84.289074"
    },
]

const testZipValue = 40741;
const searchZipBtn = document.getElementById("searchZipBtn");

function getUserZip() {
    let userZipValue = document.getElementById("userZipValue").value;
    return userZipValue;
}


searchZipBtn.addEventListener('click', () => {
    getUserZip();
    console.log(userZipValue.type);
    console.log(userZipValue);
});

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