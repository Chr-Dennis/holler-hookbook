
import dotenv from 'dotenv';
dotenv.config();

import Geocodio from 'geocodio-library-node';
const geocoder = new Geocodio(process.env.GEOCODIO_API_KEY);

export async function getZipCoords(zip) {
    try {
        const response = await fetch(`https://api.geocod.io/v1.9/geocode?q=${zip}&api_key=${process.env.GEOCODIO_API_KEY}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        const location = data.results[0].location;

        console.log(location.lat, location.lng);

        return location;
    } catch (error) {
        console.error(`Error occurred: ${error.message}`);
    }
}

getZipCoords(41301);