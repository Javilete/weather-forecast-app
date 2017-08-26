var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');
var queryString = require('query-string');
var Loading = require('./Loading');
var ForecastGrid = require('./ForecastGrid');
var api = require('../utils/api');

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: ''
    };

    this.getForecast = this.getForecast.bind(this);
  }

  componentDidMount () {
    var search = queryString.parse(this.props.location.search);
    console.log(this.props);
    this.getForecast(search.city);
  }

  getForecast(city) {
    api.getForecast(city, 6).then(
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
        {!this.state.forecast ? <Loading /> : <ForecastGrid forecast={this.state.forecast} /> }
      </div>
    )
  }
}

module.exports = Forecast;
