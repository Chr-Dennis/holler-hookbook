import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const refRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const refFilePath = path.join (
    __dirname,
    '..',
    'src',
    'data'
);

// Retrieve fish species data
async function getAllFish() {
    try {
        const fishData = await fs.readFile(path.join(refFilePath, 'fishData.json'));
        const fish = JSON.parse(fishData);
        return fish;
    } catch (error) {
        console.error('error', error.message);
    }
}

refRouter.get('/fish-data', async (req, res) => {
    const fish = await getAllFish();
    res.status(200).json({
        data: fish,
    });
});

// Retrieve fishing seasons data
async function getFishSeasons() {
    try {
        const seasonsData = await fs.readFile(path.join(refFilePath, 'fishSeasons.json'));
        const seasons = JSON.parse(seasonsData);
        return seasons;
    } catch (error) {
        console.error('error', error.message);
    }
}

refRouter.get('/fish-seasons', async (req, res) => {
    const seasons = await getFishSeasons();
    res.status(200).json({
        data: seasons,
    });
});


// async function getFishSeasons() {
//     try {
//         const seasonsData = await fs.readFile(path.join(refFilePath, 'fishSeasons.json'));
//         const seasons = JSON.parse(seasonsData);
//         return seasons;
//     } catch (error) {
//         console.error('error', error.message);
//     }
// }

// refRouter.get('/fish-seasons', async (req, res) => {
//     const seasons = await getFishSeasons();
//     res.status(200).json({
//         data: seasons,
//     });
// });





export default refRouter;
