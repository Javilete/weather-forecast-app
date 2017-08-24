var axios = require('axios');

var API_KEY = '0f585df0241438ef9f81fdec9b26f746';
var URL = 'http://api.openweathermap.org/data/';
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

function getFiveDayForecast(city) {
  var uri = URL + VERSION + FIVE_DAY_FORECAST_PATH + '?q=' + city + '&type=accurate&APPID=' + API_KEY + '&cnt=5';
  return axios.get(uri)
    .then(function(forecast){
      return forecast.data;
    });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getFiveDayForecast: getFiveDayForecast
}
