var React = require('react');
var ReactRouter = require('react-router-dom');
var PropTypes = require('prop-types');
var Header = require('./Header');
var Home = require('./Home');
var Forecast = require('./Forecast');
var ForecastDetail = require('./ForecastDetail');

var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/forecast' component={Forecast} />
            <Route path='/forecast/detail' component={ForecastDetail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

module.exports = App;
