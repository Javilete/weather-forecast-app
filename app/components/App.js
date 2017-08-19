var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');
var Main = require('./Main');

class App extends React.Component {
  render() {
    return (
      <Main />
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

module.exports = App;
