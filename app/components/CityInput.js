var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');

class CityInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <div className='row'>
          <label className='header' htmlFor='city'>
            Enter a city and state
          </label>
        </div>
        <div className='row'>
          <input
            id='city'
            placeholder='London'
            type='text'
            autoComplete='off'
            value={this.state.city}
            onChange={this.handleChange} />
        </div>
        <div className='row'>
          <button
            className='button'
            type='submit'
            disabled={!this.state.city}>
            Get Weather
          </button>
        </div>
      </form>
    )
  }
}


module.exports = CityInput;
