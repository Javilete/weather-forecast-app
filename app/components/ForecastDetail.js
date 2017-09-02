var React = require('react');
var moment = require('moment');
var changeCase = require('change-case');

class ForecastDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      day: '',
    }
  }

  componentDidMount () {
    console.log(this.props.location);
  }


  render() {
    var day = this.props.location.state.date.day;
    var city = this.props.location.state.city;

    return(
      <div className='detail'>
        <ul>
          <li className='row'>
            <p className='date'>{moment.unix(day.dt).format('dddd, MMM Do')}</p>
          </li>
          <li className='row'>
            <img src={'../app/images/weather-icons/' + day.weather[0].icon + '.svg'} alt='{day.weather[0].description}' />
          </li>
          <li className='row'>
            <p className='main'>{day.weather[0].main}</p>
          </li>
          <li className='row'>
            <h1>{city}</h1>
          </li>
          <li className='row'>
            <ul className='extra-info'>
              <li>{changeCase.sentenceCase(day.weather[0].description)}</li>
              <li>Min temp: {day.temp.min} degrees</li>
              <li>Max temp: {day.temp.max} degrees</li>
              <li>Humidity: {day.humidity}</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}



module.exports = ForecastDetail;
