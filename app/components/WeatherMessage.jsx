var React = require('react');

// var WeatherMessage = React.createClass({
//
//    render : function() {
//      var location = this.props.location;
//      var temp = this.props.temp;
//      return (
//           <h1>Its {temp} in {location}</h1>
//            );
//    }
//
// });

var WeatherMessage = (props) => {
  //var location = this.props.location;
  //var temp = this.props.temp;
  var {location, temp} = props;
  return (
       <h1>Its {temp} in {location}</h1>
        );

}
module.exports = WeatherMessage;
