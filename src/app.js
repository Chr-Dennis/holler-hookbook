
import express from 'express';
import refRouter from './referenceRouter.js';
import path from 'path';
import bodyParser from "body-parser";

const app = express();
const port = 4000;


app.use(express.static(path.join("..", "public")));
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/data', refRouter);

app.get('/api/fish-seasons', (req, res) => {
    res.json([
    {
        "id": 1,
        "season": "Traditional fishing (pole & line)",
        "regulationSeason": "Open season",
        "dates2025": "Year-round"
    },

    {
        "id": 2,
        "season": "Trout Catch & Release (Designated Streams)",
        "regulationSeason": "Streams open to fishing year-round; Oct. 1 - Mar. 31 No harvest of trout/articifical lures only",
        "dates2025": "Oct. 1, 2025 - Mar. 31, 2026"
    },
    
    {
        "id": 3,
        "season": "Free Fishing Days (No license required)",
        "regulationSeason": "1st Full weekend, (consecutive Sat.-Sun.) in June",
        "dates2025": "​​​​​​​​​​​​June 7 - 8, 2025​​"
    },

    {
        "id": 4,
        "season": "Bow Fishing, Spear Fishing",
        "regulationSeason": "​​​​​Open Season",
        "dates2025": "​​​​​​​​​​​​Year-round"
    },

    {
        "id": 5,
        "season": "​​​​​​​Sport Fishing Trotlines, Jugging, Setlines",
        "regulationSeason": "​​​​​Open Season ",
        "dates2025": "Year-round"
    },

    {
        "id": 6,
        "season": "​​​​​​​​Gigging & Snagging for Rough Fish",
        "regulationSeason": "Feb. 1 - May 10",
        "dates2025": "Feb. 1 - May 10, 2025"
    },

    {
        "id": 7,
        "season": "​​​​​​Tickling & Noodling for Rough Fish",
        "regulationSeason": "​June 1 - Aug. 31 (daylight hours)",
        "dates2025": "​​​​​​​​​​June 1 - Aug. 31, 2025"
    }
    ]);
})

app.get('/api/get-zip-coords', (req, res) => {
    res.send('You found the zip coordinates page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
