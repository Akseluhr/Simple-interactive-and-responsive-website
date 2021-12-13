import {getData} from './fetchdata.js'

// Funktionen skapar nytt p-element och
// stoppar in / skriver ut de värden som hämtats från API:et m.h.a funktionen getData().
function printForecast(text){
    const p = document.createElement('p');
    p.className = "dailyWeather";
    p.innerText = text;
    document.querySelector('aside').appendChild(p);
}

getData().then(printForecast);
