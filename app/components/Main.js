var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');
var CityInput = require('./CityInput');

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <CityInput />
      </div>
    )
  }
}

module.exports = Main;
