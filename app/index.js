var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('./index.css');

ReactDOM.render(<App name='Weather-Forecast' />, document.getElementById('app'))
