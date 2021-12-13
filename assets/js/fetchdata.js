//Hämtar väder-data m.h.a. API.
// Funktionen exporteras för senare användning i main.js
// Funktioner returnerar temperatur, nederbörd och vindhastighet m.h.a indexering
export function getData(){
  return fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const weatherData = data.timeSeries[0].parameters;
      return weatherData[10].values[0] + '°C,    ' + weatherData[2].values[0] + 'mm,    ' + weatherData[17].values[0] + 'm/s';
    });
}
