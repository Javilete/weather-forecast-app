var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');
var Home = require('./Home');
var Header = require('./Header');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

module.exports = Main;
