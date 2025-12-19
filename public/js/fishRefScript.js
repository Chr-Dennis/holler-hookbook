
const getFishBtn = document.getElementById('getFishBtn');
const getTackleBtn = document.getElementById('getTackleBtn');
const getCondBtn = document.getElementById('getCondBtn');
const clearBtn = document.getElementById('clearBtn');
const fishDivLgScreen = document.getElementById('fishDivLgScreen');
const tackleDivLgScreen = document.getElementById('tackleDivLgScreen');
const weatherDivLgScreen = document.getElementById('weatherDivLgScreen');

const catContents = document.getElementById('catContents');

let fishData = [];

async function getFishData() {
    try {
        const response = await fetch('./api/data/fish-data');
        const result = await response.json();
        fishData = result.data;
        console.log(fishData);
        console.log(fishData.length);
        return fishData;
    } catch (error) {
        console.error(`There was an error: ${error}`);
    }
}

const resetCatContents = () => {
    catContents.innerText = "";
    fishDivLgScreen.innerText = "";
    tackleDivLgScreen.innerText = "";
    weatherDivLgScreen.innerText = "";
    console.clear();
    console.log("Contents cleared");
}

getFishData();
resetCatContents();

clearBtn.addEventListener('click', () => {
    resetCatContents();
    console.log("Contents cleared");
});

getFishBtn.addEventListener('click', () => {
    console.clear();
    console.log("Button 1 clicked");
    resetCatContents();
    fishData.forEach((fish) => {
        const fishCard = document.createElement('div');
        fishCard.className = 'fish-card';
        
        fishCard.innerHTML = `
        <h3>${fish.commonName}</h3>
        <p><strong>Species Name:</strong> ${fish.scientificName}</p>
        <p><strong>Favorite Foods:</strong> ${fish.favFood}</p>
        <p><strong>Preferred Water Temperature:</strong> ${fish.prefWaterTemp}</p>
        <p><strong>Average Size:</strong> ${fish.avgSize}</p>
        <p><strong>Kentucky Record:</strong> ${fish.recordSizeKy}</p>
        `
        
        catContents.append(fishCard);

        if (window.innerWidth > 768) {
            
            fishDivLgScreen.append(fishCard.cloneNode(true));
        }
    }) 
});

getTackleBtn.addEventListener('click', () => {
    console.clear();
    console.log("Button 2 clicked");
    resetCatContents();
    const p = document.createElement('p');
    p.className = "cat-para";
    p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
    catContents.append(p);

    if (window.innerWidth > 768) {     
        tackleDivLgScreen.append(p);
    }
})

getCondBtn.addEventListener('click', () => {
    console.clear();
    console.log("Button 3 clicked");
    resetCatContents();
    const p = document.createElement('p');
    p.className = "cat-para";
    p.innerText = "Cupiditate soluta hic non aut molestias ullam sequi, molestiae eveniet dolor voluptatum aspernatur veniam pariatur exercitationem maiores ipsam deleniti quisquam quae?";
    catContents.append(p);

    if (window.innerWidth > 768) {     
        weatherDivLgScreen.append(p);
    }
    
})

