
# The Holler Hookbook

The Holler Hookbook is a project intended to be a resource for those who want a fishing reference guide for the south-central and eastern Kentucky regions.

## Project Overview

A final capstone project for Code:You, combining all learned skills with personal interest and creativity.

There is no short supply of company pages and personal blogs dedicated to fishing, but none quite provide the information I want to understand better. They also don't have quite the right feel for me, either. The Holler Hookbook aims for the lofty goal of being a pocket reference guide combined with jotted notes from a worn pocket notebook. This project provides weather-related fishing condition info for a handful of lakes in south and eastern Kentucky, as well as some info regarding popular fish.

## Downloading

1. Install Node.js, using `node -v` and `npm -v` to ensure Node is above v22.20.0 and NPM is above 11.6.2.
2. Clone down the repo from Github using GIT:

```bash
git clone https://github.com/Chr-Dennis/holler-hookbook.git
```

3. Change into the project directory:

```bash
cd src
```

4. Install dependency software:

```bash
npm install
```

5. Launch the server

```bash
npm run dev
```

6. Navigate to http://localhost:4000 in your browser to view the project.

## Dependencies

- Express.js 5.2.1
- body-parser 2.2.1

## Capstone Features

1. Create a node.js web server using Express.js.

- Tremendous appreciation for the Code:You team as well as the BroCode and Web Dev Simplified channels and communities.

2. Create an API that implements HTTP requests for GET and POST. Data can be stored in a JSON file on the back-end.

- Constructed multiple routes to API, both for reading and creating data. This allows the user to review collected reference data as well as make requests for suggested additions to reference material.

3. Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.

- Multiple sets of JSON data manipulated for delivery of reference material, both from external sources and self-compiled.

## Sample Code

```javascript
    const resetCatContents = () => {
        catContents.innerText = "";
        fishDivLgScreen.innerText = "";
        tackleDivLgScreen.innerText = "";
        weatherDivLgScreen.innerText = "";
        console.clear();
        console.log("Contents cleared");
    }
```

- Clearing of generated reference card data to repopulate with new data.

```javascript
    async function getLakeConds(lat, lng) {
    try {
        const response = await fetch(`${weatherURL}latitude=${lat}&longitude=${lng}${weatherURLCondits}`);
        const lakeConds = await response.json();
        return lakeConds;
    } catch (error) {
        console.error(`Error encountered: ${error}`);
    }
}
```

- Fetching of weather condition data for a provided latitude and longitude of various lakes.

## Challenges

It is humbling to admit, but a decline is my ability to focus on course material when reviewing APIs as well as Node.js and Express.js caused me to start this journey at what felt like a steeper slope than what needed to be present. I had to relearn the information and review the course material multiple times to stay on track with what I was trying to develop. This is at no fault of the material itself, of course. If redoing this project, I would make sure my core features are more properly understood before diving in, perhaps to at least know what I am getting myself into!

## Stretch Goals

1. Expand reference material available regarding fish, tackle, and environmental variables.
2. Solidify user capability to organically input a zip code, fetch geolocation data from that zip code, and provide conditions data based on user input.
3. Incorporate regulation fishing seasons data.
4. Develop simple user profile system to allow saving of kits used in certain areas or for certain species.

## Final Remarks

None of this would be possible without the tremendous support of the Code:You team and volunteer mentors. I am forever grateful and blessed to have had access to this program. I am also very thankful for, again, the BroCode and Web Dev Simplified channels and related communities, as well as the numerous online resources for web development and design, most prominently being W3Schools, Mozilla Developer Network, and the StackExchange users who always seemed to have asked the right questions for me ahead of time.

Thanks most of all to the Lord, my God, and secondly to my wife for dealing with the course load with me and supporting me the whole way.
