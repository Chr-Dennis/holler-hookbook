
const express = require('express')
const path = require('path')
const app = express()
const port = 4000


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/fish', (req, res) => {
    res.json([
    {
        "id": 1,
        "commonName": "Largemouth Bass",
        "scientificName": "Micropterus salmoides",
        "favFood": "Invertabrates, bait fish, amphibians, small fish",
        "prefWaterTemp": "55°-65°F",
        "avgSize": "1-5lbs, 12-20in",
        "recordSizeKy": "14lb 9.5oz"
    },
    
    {
        "id": 2,
        "commonName": "Blue Catfish",
        "scientificName": "Ictalurus furcatus",
        "favFood": "Amphibians, small reptiles, crayfish, bait fish, small fish",
        "prefWaterTemp": "70°-84°F",
        "avgSize": "30-70lbs, 25-46in",
        "recordSizeKy": "106lb 14.4oz"
    },

    {
        "id": 3,
        "commonName": "Bluegill",
        "scientificName": "Lepomis macrochirus",
        "favFood": "Insects and larvae, small crustaceans, small fish and fry",
        "prefTemp": "65°-80°F",
        "avgSize": "0.5-1lbs, 4-12in",
        "recordSizeKy": "4lb 3oz"
    }   
]);

})

app.get('/api/fishSeasons', (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
