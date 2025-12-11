
const getFishBtn = document.getElementById('getFishBtn');
const getTackleBtn = document.getElementById('getTackleBtn');
const getCondBtn = document.getElementById('getCondBtn');
const clearBtn = document.getElementById('clearBtn');

const catContents = document.getElementById('catContents');

let fishData = [];

async function getFishData() {
    try {
        const response = await fetch('./api/fish-data');
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

clearBtn.addEventListener('click', () => {
    resetCatContents();
    console.clear();
    console.log("Contents cleared");
});

getFishBtn.addEventListener('click', () => {
    console.log("Button 1 clicked");
    resetCatContents();
    for (let i = 0; i < fishData.length; i++) {
        const fishCard = document.createElement('div');
        fishCard.className = 'fish-card';
        catContents.append(fishCard);

        const h3 = document.createElement('h3');
        h3.innerText = `${fishData[i].commonName}`;
        fishCard.append(h3);

        let results = Object.keys(fishData[i]).map(key => {
            console.log(key, ': ', fishData[i][key]);
            return `<p><strong>${key}</strong>: ${fishData[i][key]}</p>`;
        });
        fishCard.insertAdjacentHTML('beforeend', results.join(''));
    }
});

getTackleBtn.addEventListener('click', () => {
    console.log("Button 2 clicked");
    resetCatContents();
    const p = document.createElement('p');
    p.className = "cat-para";
    p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
    catContents.append(p);
})

getCondBtn.addEventListener('click', () => {
    console.log("Button 3 clicked");
    resetCatContents();
    const p = document.createElement('p');
    p.className = "cat-para";
    p.innerText = "Cupiditate soluta hic non aut molestias ullam sequi, molestiae eveniet dolor voluptatum aspernatur veniam pariatur exercitationem maiores ipsam deleniti quisquam quae?";
    catContents.append(p);
})

