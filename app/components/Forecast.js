var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');
var queryString = require('query-string');
var Loading = require('./Loading');
var api = require('../utils/api');

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: ''
    };

    this.getWeatherForecast = this.getWeatherForecast.bind(this);
  }

  componentDidMount () {
    var search = queryString.parse(this.props.location.search);
    console.log(this.props);
    this.setState(function() {
      return {
        city: search.city
      }
    })
    this.getWeatherForecast(search.city);
  }

  getWeatherForecast(city) {
    api.getCurrentWeather(city).then(
      function(response){
        console.log(response);
        this.setState(function() {
          return {
            forecast: response
          }
        })
      }.bind(this), function(error) {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <div className='forecast'>
        <h1>{this.state.city}</h1>
        {!this.state.forecast ? <Loading /> : null }
      </div>
    )
  }
}

module.exports = Forecast;
