var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
  }

  render() {
    return(
      <div className='header'>
        <div className='row'>
          <p className='title'>
            The Weather
          </p>
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
        </div>
      </div>
    )
  }
}

module.exports = Header;
