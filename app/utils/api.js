var axios = require('axios');

var API_KEY = '0f585df0241438ef9f81fdec9b26f746';
var URL = 'https://api.openweathermap.org/data/';
var VERSION = '2.5';

var CURRENT_WEATHER_PATH = '/weather';
var FIVE_DAY_FORECAST_PATH = '/forecast/daily';

function getCurrentWeather(city) {
  var uri = URL + VERSION + CURRENT_WEATHER_PATH + '?q=' + city + '&type=accurate&APPID=' + API_KEY;
  return axios.get(uri)
    .then(function(weather){
      return weather.data;
    });
}

function getForecast(city, days) {
  var uri = URL + VERSION + FIVE_DAY_FORECAST_PATH + '?q=' + city + '&type=accurate&units=metric&APPID=' + API_KEY + '&cnt=' + days;
  return axios.get(uri)
    .then(function(forecast){
      return forecast.data;
    });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}
