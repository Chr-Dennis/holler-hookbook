
const getFishBtn = document.getElementById('getFishBtn');
const getTackleBtn = document.getElementById('getTackleBtn');
const getCondBtn = document.getElementById('getCondBtn');

const catContents = document.getElementById('catContents');

let fishData = [];

async function getFishData() {
    try {
        const response = await fetch('./fishData.json');
        fishData = await response.json();
        console.log(fishData);
        console.log(fishData.length);
        return fishData;
    } catch (error) {
        console.error(`There was an error: ${error}`);
    }
}

const resetCatContents = () => {
    catContents.innerText = "";
    console.log("Contents cleared");
}

getFishData();
resetCatContents();

getFishBtn.addEventListener('click', () => {
    console.log("Button clicked");
    for (let i = 0; i < fishData.length; i++) {
        const fishCard = document.createElement('div');
        fishCard.className = 'fish-card';

        const catContents = document.getElementById('catContents');
        catContents.append(fishCard);

        const h3 = document.createElement('h3');
        h3.innerText = `${fishData[i].commonName}`;
        fishCard.append(h3);

        const p = document.createElement('p');
        let keyValue;
        // Here, I want to iterate over the properties of Obj[i] and 
        // fishCard.append `<p><strong>${Obj[i].key[k]}</strong>: ${Obj[i].value[k]}</p>`
        // 
        // for (let k = 2; k < Object.values(fishData[i]).length; k++) {
        //     console.log(fishData(i).??????)
        // }
    }
});