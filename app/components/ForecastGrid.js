var React = require('react');
var PropTypes = require('prop-types');
var moment = require('moment');
var Link = require('react-router-dom').Link;


class ForecastGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    this.setState(function() {
      return {city: this.props.forecast.city.name}
    });
  }

  handleClick(event, date) {
    console.log('City: ' + this.state.city + ', date: ' + date);
  }

  render() {
    var forecast = this.props.forecast;
    var handleClick = this.handleClick;

    return (
      <div className='forecast'>
        <h1> {forecast.city.name}, {forecast.city.country} </h1>
        <ul className='forecast-list'>
            {forecast.list.map(function(day,index){
              return (
                <li key={day.dt + index}
                  className='forecast-item'
                  onClick={handleClick.bind(null, day.dt)}>
                  <Link to={{
                      pathname: `/detail/${forecast.city.name}`,
                      state: {
                                  date: {day}, city: `${forecast.city.name}, ${forecast.city.country}`}

                            }}>
                  <img src={'../app/images/weather-icons/' + day.weather[0].icon + '.svg'} alt='{day.weather[0].description}' />
                  <p className='weather'>{day.weather[0].main}</p>
                  <p className='date'>{moment.unix(day.dt).format('dddd, MMM Do')}</p>
                </Link>
              </li>
            )
            })}
        </ul>
      </div>
    )
  }
}

module.exports = ForecastGrid;
