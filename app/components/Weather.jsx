var React = require('react');
var WeatherMessage = require('WeatherMessage');

var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap')


var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    //alert(location);
    var that = this;
  //  debugger;
    this.setState({isLoading : true});
    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });

  },
  render: function(){
    var {isLoading, temp , location} = this.state;
function renderMessage() {
  if (isLoading) {
    return <h3>Fetching Weather....</h3>;
  }else if (temp &&location) {
    return <WeatherMessage location={location} temp={temp}/>;
  }
}
    return (
     <div>
      <h3>Weather Component</h3>
    <WeatherForm onSearch={this.handleSearch}></WeatherForm>

     {renderMessage()}
    </div>
  );
  }
});

module.exports = Weather;
