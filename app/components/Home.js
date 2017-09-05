var React = require('react');
var ReactRouter = require('react-router-dom');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function() {
      return{
        city: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('City entered: ' + this.state.city);
    this.context.router.push('/forecast?city=' + this.state.city);
  }

  handleClick(event) {
    if(this.state.city.length == 0) {
      event.preventDefault();
    }
  }

  render() {
    var city = this.state.city;

    return (
      <div className='section' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <div className='centered'>
          <form className='column' onSubmit={this.handleSubmit}>
            <div className='row'>
              <label className='title' htmlFor='city'>
                Enter a city name
              </label>
            </div>
            <div className='row'>
              <input
                id='city'
                placeholder='ie: London'
                type='text'
                autoComplete='off'
                value={this.state.city}
                onChange={this.handleChange} />
            </div>
            <div className='row'>
              <Link
                className='button'
                onClick={this.handleClick}
                to={{
                  pathname: '/forecast',
                  search: '?city=' + city
                }}>
                Get Weather
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


module.exports = Home;
