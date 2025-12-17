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
const userReqFilePath = path.join (
    __dirname,
    '..',
    'src',
    'data',
    'userRefRequest.json'
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

// characterRouter.get('/:id', async (req, res) => {
//     const character = await getCharacterById(req.params.id);

//     if (!character) {
//         return res.status(404).json({
//             data: "Character does not exist with that id"
//         });
//     }

//     res.status(200).json({
//         data: character,
//     });
// });

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

// Get weather conditions for preset lakes
async function getLakeCoords() {
    try {
        const lakeCoordsData = await fs.readFile(path.join(refFilePath, 'lakeCoords.json'));
        const lakeCoords = JSON.parse(lakeCoordsData);
        return lakeCoords;
    } catch (error) {
        console.error('error', error.message);
    }
}

refRouter.get('/lake-coords', async (req, res) => {
    const lakeCoords = await getLakeCoords();
    res.status(200).json({
        data: lakeCoords,
    });
});

// Create and store user reference requests
async function createRefRequest(requestBody) {
    try {
        const refReqData = await fs.readFile(userReqFilePath);
        const refReqs = JSON.parse(refReqData);

        const newUserReq = {
            id: refReqs.length + 1,
            reqType: requestBody.reqType,
            reqName: requestBody.reqName,
            reqDesc: requestBody.reqDesc
        };

        if (!newUserReq.reqType || !newUserReq.reqName || !newUserReq.reqDesc) {
            return undefined;
        }

        refReqs.push(newUserReq);

        await fs.writeFile(userReqFilePath, JSON.stringify(refReqs));

        return newUserReq;        
    } catch (error) {
        console.error(error.message);
    }
}

refRouter.post('/userRefRequest', async (req, res) => {
    console.log("REQ BODY:", req.body);
    try {
        if (!req.body) {
            return res.status(400).json({
                data: 'Bad Request. Missing required information.'
            });
        }

        const newRefReq = await createRefRequest(req.body);

        if (!newRefReq) {
            return res.status(400).json({
                data: 'Bad Request. Missing required information',
            });
        }
        res.status(201).json({
            data: newRefReq,
        });
    } catch (error) {
        console.error('error: ', error.message);
    }
})

export default refRouter;
