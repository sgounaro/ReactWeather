var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=da184056a1c15031427762622b139e0d&units=imperial';

//da184056a1c15031427762622b139e0d


module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    //console.log(encodedLocation);
   var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  // console.log(requestUrl);
  return  axios.get(requestUrl).then(function(res){
  //  console.log(res);
    debugger;
    if (res.data.cod && res.data.message) {
       console.log("got error");
       throw new Error(res.data.message)
    } else {
       return res.data.main.temp;
    }

   //axios.get(requestUrl).then(function(res) {

   }, function(res) {
     throw new Error(res.data.message)
   });
  }
}
