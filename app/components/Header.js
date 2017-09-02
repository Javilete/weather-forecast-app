var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');

class Header extends React.Component {

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
    return(
      <div className='header'>
        <div className='row'>
          <p className='title'>
            J-Weather
          </p>
          <form className='column' onSubmit={this.handleSubmit}>
            <p>
              <input
                id='city'
                placeholder='London'
                type='text'
                autoComplete='off'
                value={this.state.city}
                onChange={this.handleChange} />
              <button
                className='button'
                type='submit'
                disabled={!this.state.city}>
                Get Weather
              </button>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = Header;
